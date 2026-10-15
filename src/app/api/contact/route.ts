export const runtime = 'nodejs';

const CONTACT_CC = ['francis@awuya.ng', 'business@awuya.ng', 'godwin@awuya.ng'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOPICS = ['Account help', 'Transfers & funding', 'Fraud or lost phone', 'Partnerships & press', 'Something else'];

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const topic = String(body?.topic ?? '');
  const msg = String(body?.msg ?? '').trim();

  if (!name || !msg || !EMAIL_RE.test(email) || !TOPICS.includes(topic) || name.length > 200 || msg.length > 5000) {
    return Response.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const { ZEPTOMAIL_TOKEN, ZEPTOMAIL_FROM = 'support@usefiam.com', ZEPTOMAIL_API = 'https://api.zeptomail.com/v1.1/email', CONTACT_TO = 'support@usefiam.com' } = process.env;
  if (!ZEPTOMAIL_TOKEN) {
    console.error('Contact form: ZEPTOMAIL_TOKEN is not set');
    return Response.json({ error: 'Email is not configured' }, { status: 500 });
  }

  const safeName = name.replace(/[\r\n]/g, ' ');
  try {
    const res = await fetch(ZEPTOMAIL_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ZEPTOMAIL_TOKEN.startsWith('Zoho-enczapikey') ? ZEPTOMAIL_TOKEN : `Zoho-enczapikey ${ZEPTOMAIL_TOKEN}`,
      },
      body: JSON.stringify({
        from: { address: ZEPTOMAIL_FROM, name: 'Fiam website' },
        to: [{ email_address: { address: CONTACT_TO, name: 'Fiam support' } }],
        cc: CONTACT_CC.map((address) => ({ email_address: { address } })),
        reply_to: [{ address: email, name: safeName }],
        subject: `[${topic}] Message from ${safeName}`,
        textbody: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${msg}`,
      }),
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  } catch (err) {
    console.error('Contact form: send failed', err);
    return Response.json({ error: 'Failed to send' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
