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
  const from = process.env.SMTP_FROM || process.env.EMAIL_TO || 'contact@truceptconsulting.com';
  const to = process.env.EMAIL_TO || 'contact@truceptconsulting.com';

  // Auto-detect common providers if host not supplied
  if (!host && user) {
    const u = user.toLowerCase();
    if (u.endsWith('@gmail.com') || u.endsWith('@googlemail.com')) host = 'smtp.gmail.com';
    if (u.endsWith('@truceptconsulting.com') || u.endsWith('@privateemail.com')) host = 'smtp.privateemail.com';
  }

  return { host, port, user, pass, from, to };
}

async function sendWithSMTP(payload: any) {
  const { host, port, user, pass, from, to } = resolveSmtpConfig();

  if (!host || !port || !user || !pass) return { ok: false as const, reason: 'missing_env' };

  const nodemailer = (await import('nodemailer')).default;
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.verify();
  } catch (e: any) {
    console.error('SMTP verify failed:', e?.message);
    return { ok: false as const, reason: 'invalid_credentials' };
  }

  const { firstName, lastName, email, subject, message, company } = payload;
  const text = `New contact inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || '-'}\nSubject: ${subject}\n\nMessage:\n${message}`;

  await transporter.sendMail({ from, to, subject: `[Website] ${subject || 'New Inquiry'}`, text });

  if (email) {
    await transporter.sendMail({
      from,
      to: email,
      subject: 'We received your message – Trucept Consulting',
      text: 'Thank you for reaching out. Our team will contact you shortly.',
    });
  }

  return { ok: true as const };
}

async function sendWithSendGrid(payload: any) {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) return { ok: false as const, reason: 'missing_env' };
  const sgMail = await import('@sendgrid/mail');
  // @ts-ignore
  sgMail.setApiKey(key);
  const { firstName, lastName, email, subject, message, company } = payload;
  const to = process.env.EMAIL_TO || 'contact@truceptconsulting.com';
  const toCompany = {
    to,
    from: to,
    subject: `[Website] ${subject || 'New Inquiry'}`,
    text: `New contact inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || '-'}\nSubject: ${subject}\n\nMessage:\n${message}`,
  };
  const toUser = email
    ? { to: email, from: to, subject: 'We received your message – Trucept Consulting', text: 'Thank you for reaching out. Our team will contact you shortly.' }
    : null;
  try {
    // @ts-ignore
    await sgMail.send(toCompany);
    if (toUser) {
      // @ts-ignore
      await sgMail.send(toUser);
    }
    return { ok: true as const };
  } catch (e: any) {
    console.error('SendGrid send failed:', e?.response?.body || e?.message);
    return { ok: false as const, reason: 'provider_error' };
  }
}

async function sendWithEtherealDev(payload: any) {
  const nodemailer = (await import('nodemailer')).default;
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
  const { firstName, lastName, email, subject, message, company } = payload;
  const text = `New contact inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || '-'}\nSubject: ${subject}\n\nMessage:\n${message}`;
  const info = await transporter.sendMail({
    from: 'Trucept Consulting <no-reply@ethereal.dev>',
    to: process.env.EMAIL_TO || 'contact@truceptconsulting.com',
    subject: `[DEV] ${subject || 'New Inquiry'}`,
    text,
  });
  const previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
  return { ok: true as const, previewUrl };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message, company, website } = body ?? {};

    // Honeypot
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // Rate limit
    const ip = getClientIp(req);
    const now = Date.now();
    const last = ipToLastHit.get(ip) || 0;
    if (now - last < rateLimitWindowMs) {
      return NextResponse.json({ ok: false, error: 'Please wait a moment before sending another message.' }, { status: 429 });
    }
    ipToLastHit.set(ip, now);

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Prefer SMTP, then SendGrid; in dev, fall back to Ethereal preview
    const smtpResult = await sendWithSMTP(body);
    if (smtpResult.ok) return NextResponse.json({ ok: true });

    const sgResult = await sendWithSendGrid(body);
    if (sgResult.ok) return NextResponse.json({ ok: true });

    if (process.env.NODE_ENV !== 'production') {
      const ethResult = await sendWithEtherealDev(body);
      if (ethResult.ok) return NextResponse.json({ ok: true, previewUrl: ethResult.previewUrl });
    }

    // Build actionable error
    if (smtpResult.reason === 'missing_env') {
      return NextResponse.json(
        { ok: false, error: 'Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO.' },
        { status: 500 }
      );
    }
    if (smtpResult.reason === 'invalid_credentials') {
      return NextResponse.json(
        { ok: false, error: 'Email credentials are invalid. Please verify SMTP settings.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: false, error: 'Email provider error. Please try again later.' }, { status: 500 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
