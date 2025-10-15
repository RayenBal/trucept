import { NextRequest, NextResponse } from 'next/server';

const rateLimitWindowMs = 30_000; // 30 seconds
const ipToLastHit = new Map<string, number>();

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  // @ts-ignore - fallback when available
  return (req as any).ip || 'unknown';
}

function resolveSmtpConfig() {
  let host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user || 'contact@truceptconsulting.com';
  const to = process.env.EMAIL_TO || user || 'contact@truceptconsulting.com';

  if (!host && user) {
    const u = user.toLowerCase();
    if (u.endsWith('@gmail.com') || u.endsWith('@googlemail.com')) host = 'smtp.gmail.com';
    if (u.endsWith('@truceptconsulting.com') || u.endsWith('@privateemail.com')) host = 'smtp.privateemail.com';
  }

  return { host, port, user, pass, from, to };
}

function companyEmailHTML(payload: any) {
  const { firstName, lastName, email, subject, message, company } = payload;
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7fa;padding:24px;font-family:Inter,Arial,sans-serif;color:#0E1526;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e3e6ed;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#0C2E6B;color:#ffffff;padding:20px 24px;font-weight:700;font-size:18px;">New Website Inquiry</td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <p style="margin:0 0 8px 0;font-size:16px;font-weight:600;">Subject</p>
            <p style="margin:0 0 16px 0;color:#5B6B86;">${subject}</p>
            <p style="margin:0 0 8px 0;font-size:16px;font-weight:600;">From</p>
            <p style="margin:0 0 16px 0;color:#5B6B86;">${firstName} ${lastName} • ${email}${company ? ' • ' + company : ''}</p>
            <p style="margin:0 0 8px 0;font-size:16px;font-weight:600;">Message</p>
            <p style="white-space:pre-wrap;margin:0;color:#0E1526;line-height:1.6">${message}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 24px;border-top:1px solid #e3e6ed;color:#5B6B86;font-size:12px;">Trucept Consulting • Canada · Tunisia · UAE</td>
        </tr>
      </table>
    </td></tr>
  </table>`;
}

function userConfirmHTML() {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7fa;padding:24px;font-family:Inter,Arial,sans-serif;color:#0E1526;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e3e6ed;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#0C2E6B;color:#ffffff;padding:20px 24px;font-weight:700;font-size:18px;">We received your message</td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <p style="margin:0 0 12px 0;">Thank you for contacting Trucept Consulting. Our team will reach out shortly.</p>
            <p style="margin:0;color:#5B6B86;">If urgent, reply to this email or use the WhatsApp button on our site.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 24px;border-top:1px solid #e3e6ed;color:#5B6B86;font-size:12px;">Trucept Consulting • Canada · Tunisia · UAE</td>
        </tr>
      </table>
    </td></tr>
  </table>`;
}

async function sendWithSMTP(payload: any) {
  const { host, port, user, pass, from, to } = resolveSmtpConfig();

  if (!host || !port || !user || !pass) return { ok: false as const, reason: 'missing_env' };

  const nodemailer = (await import('nodemailer')).default;
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });

  try { await transporter.verify(); } catch (e: any) { console.error('SMTP verify failed:', e?.message); return { ok: false as const, reason: 'invalid_credentials' }; }

  const { firstName, lastName, email, subject, message, company } = payload;
  const text = `New contact inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || '-'}\nSubject: ${subject}\n\nMessage:\n${message}`;

  const info = await transporter.sendMail({ from, to, subject: `[Website] ${subject || 'New Inquiry'}`, text, html: companyEmailHTML(payload), replyTo: email });

  if (email) {
    await transporter.sendMail({ from, to: email, subject: 'We received your message – Trucept Consulting', text: 'Thank you for reaching out. Our team will contact you shortly.', html: userConfirmHTML() });
  }

  return { ok: true as const, delivery: { messageId: info.messageId, accepted: info.accepted, rejected: info.rejected } };
}

async function sendWithSendGrid(payload: any) {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) return { ok: false as const, reason: 'missing_env' };
  const sgMail = await import('@sendgrid/mail');
  // @ts-ignore
  sgMail.setApiKey(key);
  const { firstName, lastName, email, subject, message, company } = payload;
  const to = process.env.EMAIL_TO || process.env.SMTP_USER || 'contact@truceptconsulting.com';
  const toCompany = { to, from: to, subject: `[Website] ${subject || 'New Inquiry'}`, text: `New contact inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || '-'}\nSubject: ${subject}\n\nMessage:\n${message}`, html: companyEmailHTML(payload) };
  const toUser = email ? { to: email, from: to, subject: 'We received your message – Trucept Consulting', text: 'Thank you for reaching out. Our team will contact you shortly.', html: userConfirmHTML() } : null;
  try {
    // @ts-ignore
    await sgMail.send(toCompany); if (toUser) { // @ts-ignore
      await sgMail.send(toUser); }
    return { ok: true as const, delivery: { provider: 'sendgrid' } };
  } catch (e: any) { console.error('SendGrid send failed:', e?.response?.body || e?.message); return { ok: false as const, reason: 'provider_error' }; }
}

async function sendWithEtherealDev(payload: any) {
  const nodemailer = (await import('nodemailer')).default;
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({ host: 'smtp.ethereal.email', port: 587, secure: false, auth: { user: testAccount.user, pass: testAccount.pass } });
  const { firstName, lastName, email, subject, message, company } = payload;
  const text = `New contact inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || '-'}\nSubject: ${subject}\n\nMessage:\n${message}`;
  const info = await transporter.sendMail({ from: 'Trucept Consulting <no-reply@ethereal.dev>', to: process.env.EMAIL_TO || 'contact@truceptconsulting.com', subject: `[DEV] ${subject || 'New Inquiry'}`, text, html: companyEmailHTML(payload), replyTo: email });
  const previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
  return { ok: true as const, previewUrl, delivery: { messageId: info.messageId, accepted: info.accepted, rejected: info.rejected } };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message, company, website } = body ?? {};

    if (website) { return NextResponse.json({ ok: true }); }

    const ip = getClientIp(req); const now = Date.now(); const last = ipToLastHit.get(ip) || 0; if (now - last < rateLimitWindowMs) { return NextResponse.json({ ok: false, error: 'Please wait a moment before sending another message.' }, { status: 429 }); } ipToLastHit.set(ip, now);

    if (!firstName || !lastName || !email || !subject || !message) { return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 }); }

    const smtpResult = await sendWithSMTP(body); if (smtpResult.ok) return NextResponse.json({ ok: true, ...(process.env.NODE_ENV !== 'production' ? { delivery: smtpResult.delivery } : {}) });

    const sgResult = await sendWithSendGrid(body); if (sgResult.ok) return NextResponse.json({ ok: true, ...(process.env.NODE_ENV !== 'production' ? { delivery: sgResult.delivery } : {}) });

    if (process.env.NODE_ENV !== 'production') { const ethResult = await sendWithEtherealDev(body); if (ethResult.ok) return NextResponse.json({ ok: true, previewUrl: ethResult.previewUrl, delivery: ethResult.delivery }); }

    if (smtpResult.reason === 'missing_env') { return NextResponse.json({ ok: false, error: 'Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO.' }, { status: 500 }); }
    if (smtpResult.reason === 'invalid_credentials') { return NextResponse.json({ ok: false, error: 'Email credentials are invalid. Please verify SMTP settings.' }, { status: 500 }); }

    return NextResponse.json({ ok: false, error: 'Email provider error. Please try again later.' }, { status: 500 });
  } catch (e) { return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 }); }
}
