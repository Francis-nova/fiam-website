import { guardForm } from '@/lib/botGuard';
import { confirmationEmail } from '@/lib/contactEmails';
import { isContactTopic } from '@/config/contactTopics';

export const runtime = 'nodejs';

const CONTACT_CC = ['francis@awuya.ng', 'business@awuya.ng', 'godwin@awuya.ng'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const topic = String(body?.topic ?? '');
  const msg = String(body?.msg ?? '').trim();

  if (!name || !msg || !EMAIL_RE.test(email) || !isContactTopic(topic) || name.length > 200 || msg.length > 5000) {
    return Response.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const blocked = await guardForm(req, body, 'contact', { max: 5, windowMs: 10 * 60_000 });
  if (blocked) return blocked;

  const { ZEPTOMAIL_TOKEN, ZEPTOMAIL_FROM = 'hello@usefiam.com', ZEPTOMAIL_API = 'https://api.zeptomail.com/v1.1/email', CONTACT_TO = 'hello@usefiam.com' } = process.env;
  if (!ZEPTOMAIL_TOKEN) {
    console.error('Contact form: ZEPTOMAIL_TOKEN is not set');
    return Response.json({ error: 'Email is not configured' }, { status: 500 });
  }

  const safeName = name.replace(/[\r\n]/g, ' ');
  const send = async (mail: Record<string, unknown>) => {
    const res = await fetch(ZEPTOMAIL_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ZEPTOMAIL_TOKEN.startsWith('Zoho-enczapikey') ? ZEPTOMAIL_TOKEN : `Zoho-enczapikey ${ZEPTOMAIL_TOKEN}`,
      },
      body: JSON.stringify(mail),
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  };

  try {
    await send({
      from: { address: ZEPTOMAIL_FROM, name: 'Fiam website' },
      to: [{ email_address: { address: CONTACT_TO, name: 'Fiam' } }],
      cc: CONTACT_CC.map((address) => ({ email_address: { address } })),
      reply_to: [{ address: email, name: safeName }],
      subject: `[${topic}] Message from ${safeName}`,
      textbody: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${msg}`,
    });
  } catch (err) {
    console.error('Contact form: send failed', err);
    return Response.json({ error: 'Failed to send' }, { status: 502 });
  }

  // The team has the message, so a failed confirmation is logged but doesn't fail the form.
  try {
    await send({
      from: { address: ZEPTOMAIL_FROM, name: 'Fiam' },
      to: [{ email_address: { address: email, name: safeName } }],
      reply_to: [{ address: CONTACT_TO, name: 'Fiam' }],
      ...confirmationEmail(topic, safeName),
    });
  } catch (err) {
    console.error('Contact form: confirmation send failed', err);
  }
  return Response.json({ ok: true });
}
