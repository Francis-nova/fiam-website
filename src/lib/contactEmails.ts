import { site } from '@/config/site';
import { CONTACT_TOPICS, NEVER_SHARE, isContactTopic, type ContactTopic } from '@/config/contactTopics';

/**
 * Confirmation emails sent to the visitor after the contact form, worded per topic.
 * They deliberately don't echo the visitor's message: anyone can type someone else's
 * address into the form, so echoing it would let spammers send their text through us.
 */

type Copy = { subject: string; heading: string; paras: string[]; link?: { label: string; path: string } };

const COPY: Record<ContactTopic, Copy> = {
  'Account help': {
    subject: "We've got your message about your account",
    heading: "We're on it",
    paras: [
      "Thanks for getting in touch about your Fiam account. Someone from our team will reply to this email.",
    ],
    link: { label: 'Account tiers and limits, explained', path: '/blog/account-tiers-and-limits-nigeria/' },
  },
  'Transfers & funding': {
    subject: "We've got your message about a transfer",
    heading: "We're looking into it",
    paras: [
      'Thanks for letting us know. Someone from our team will reply to this email.',
    ],
    link: { label: 'Sent money to the wrong account? Here’s what to do', path: '/blog/sent-money-to-wrong-account-nigeria/' },
  },
  'Fraud or lost phone': {
    subject: "Urgent: we've got your fraud or lost phone report",
    heading: "We're treating this as urgent",
    paras: [
      "We've received your report. Our team will freeze your account first, then investigate and help you get back in.",
      'If anyone asks for your PIN, password or one-time codes, even if they say they work for Fiam, it’s a scam: don’t share them.',
    ],
    link: { label: 'How to report a fraudulent transaction', path: '/blog/how-to-report-a-fraudulent-transaction-nigeria/' },
  },
  'Partnerships & press': {
    subject: 'Thanks for reaching out to Fiam',
    heading: 'Thanks for reaching out',
    paras: ["We've received your message, and the right person on our team will get back to you by email."],
  },
  'Something else': {
    subject: "We've got your message",
    heading: 'Thanks for getting in touch',
    paras: ["We've received your message, and someone from our team will reply to this email."],
  },
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function confirmationEmail(topic: string, name: string) {
  const t = isContactTopic(topic) ? topic : 'Something else';
  const c = COPY[t];
  const details = CONTACT_TOPICS[t];
  const ask = 'So we can sort this quickly, reply to this email with anything below that you didn’t include in your message:';
  // First name only, capped: keeps the greeting natural and leaves little room for spam text.
  const first = name.split(/\s+/)[0].slice(0, 40);
  const url = c.link && `${site.url}${c.link.path}`;
  const sign = 'The Fiam team';
  const foot = `Fiam Finance, a product of Awuya Digital Limited · ${site.address}`;

  const textbody = [
    `Hi ${first},`,
    '',
    ...c.paras.flatMap((p) => [p, '']),
    ask,
    ...details.map((d) => `- ${d}`),
    '',
    NEVER_SHARE,
    '',
    ...(c.link ? [`${c.link.label}: ${url}`, ''] : []),
    sign,
    '',
    `You're getting this because this address was used on the contact form at ${site.url}. If that wasn't you, you can ignore this email.`,
    foot,
  ].join('\n');

  const p = (t: string) => `<p style="margin:0 0 16px;font-size:16px;line-height:24px;color:#2b3a3a">${esc(t)}</p>`;
  const htmlbody = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0;background:#f2f5f4">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f5f4;padding:32px 16px;font-family:Helvetica,Arial,sans-serif">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="padding:24px 32px;border-bottom:1px solid #e6ecea">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td><img src="${site.url}/images/fiam-logo.png" width="40" height="40" alt="" style="display:block;border:0"></td>
<td style="padding-left:6px;font-size:26px;font-weight:bold;color:#042323;letter-spacing:-0.5px">fiam</td>
</tr></table>
</td></tr>
<tr><td style="padding:32px">
<h1 style="margin:0 0 20px;font-size:24px;line-height:30px;color:#042323">${esc(c.heading)}</h1>
${p(`Hi ${first},`)}
${c.paras.map(p).join('\n')}
${p(ask)}
<ul style="margin:0 0 16px;padding-left:20px;font-size:16px;line-height:24px;color:#2b3a3a">${details.map((d) => `<li style="margin:0 0 4px">${esc(d)}</li>`).join('')}</ul>
<p style="margin:0 0 16px;padding:12px 14px;border-radius:10px;background:#fff6e0;font-size:14px;line-height:20px;color:#5a4500">${esc(NEVER_SHARE)}</p>
${
  c.link
    ? `<p style="margin:8px 0 24px"><a href="${url}" style="display:inline-block;background:#53BC7B;color:#042323;text-decoration:none;font-weight:bold;font-size:15px;padding:12px 20px;border-radius:999px">${esc(c.link.label)}</a></p>`
    : ''
}
${p(sign)}
</td></tr>
<tr><td style="padding:20px 32px;background:#f7f9f8;font-size:12px;line-height:18px;color:#6b7a7a">
You're getting this because this address was used on the contact form at <a href="${site.url}" style="color:#6b7a7a">usefiam.com</a>. If that wasn't you, you can ignore this email.<br>${esc(foot)}
</td></tr>
</table>
</td></tr>
</table>
</body></html>`;

  return { subject: c.subject, textbody, htmlbody };
}
