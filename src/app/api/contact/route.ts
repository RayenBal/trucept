import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message, company } = body ?? {};

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Placeholder: Here you would send an email or write to a datastore.
    // Intentionally omitted to keep deployment simple and error-free on Vercel.

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
