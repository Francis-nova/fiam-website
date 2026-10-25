import type { Post } from '../types';

export const fakeAlert: Post = {
  slug: 'how-to-spot-a-fake-credit-alert',
  title: 'How to spot a fake credit alert before you hand over goods',
  seoTitle: 'How to Spot a Fake Credit Alert in Nigeria',
  description:
    'Fake credit alerts cost Nigerian sellers money every day. Learn the warning signs, the one check that always works and what to do if a buyer sends a fake alert.',
  excerpt: 'Fake SMS, edited screenshots and "pending" receipts. The warning signs, and the one check that never fails.',
  topic: 'staying-safe',
  keywords: ['fake credit alert', 'fake alert', 'payment scam', 'report fraud', 'instant alerts', 'bank transfer'],
  published: '2026-10-25',
  updated: '2026-10-25',
  body: [
    {
      type: 'p',
      text: "A fake credit alert is a message or screenshot made to look like money has landed in your account when it hasn't. It's one of the most common payment scams in Nigeria, and it targets anyone who hands over goods or services after a transfer: shop owners, online vendors, POS agents, landlords and people selling things on social media.",
    },
    {
      type: 'p',
      text: "The good news is that every fake alert fails one simple check. This guide shows you that check, the warning signs to look for and what to do if someone tries it on you.",
    },

    { type: 'h2', id: 'the-one-check', text: 'The one check that always works' },
    {
      type: 'p',
      text: "**Open your banking app and look at your balance and transaction history.** Not the SMS, not the email, not the screenshot the buyer shows you. If the money isn't in your balance, you haven't been paid.",
    },
    {
      type: 'p',
      text: "Scammers can fake an SMS, edit a receipt or show you a \"successful\" screen on their own phone. They can't change what your bank shows inside your own app. Make this a rule for every sale, including with regular customers, and you're protected against nearly every version of this scam.",
    },
    {
      type: 'callout',
      title: 'In Fiam',
      text: "Every credit triggers an instant in-app alert, and it shows in your transaction history the moment it lands. Search by name or amount to confirm a payment in seconds. [See how alerts work](/security/).",
    },

    { type: 'h2', id: 'how-it-works', text: 'How fake alert scams work' },
    { type: 'p', text: 'The details change, but most fake alerts arrive in one of these forms:' },
    {
      type: 'ul',
      items: [
        "**Fake SMS alerts.** Apps and bulk-SMS services let scammers send a text that looks like a bank alert, sometimes with your real account number in it.",
        '**Edited screenshots or receipts.** A real receipt with the amount, name or date changed, or one made with a "fake receipt" app.',
        '**The "pending" excuse.** The buyer shows a transfer marked pending and says it will drop soon, then leaves with the goods.',
        '**"I sent too much".** You receive a fake alert for more than the price, and the buyer asks you to refund the "extra" from your real money.',
        '**Pressure and distraction.** Many fake alerts come at busy times, with a buyer who is in a hurry, so you skip the check.',
      ],
    },

    { type: 'h2', id: 'warning-signs', text: 'Warning signs of a fake alert' },
    {
      type: 'table',
      head: ['What you see', 'Why it is suspicious'],
      rows: [
        ['Alert from a normal phone number', 'Banks send alerts from registered sender names, not personal 080/090 numbers.'],
        ['Spelling mistakes or odd formatting', 'Real alerts follow the same template every time.'],
        ['Balance that does not add up', 'The "available balance" in the SMS does not match what you know you have.'],
        ['Buyer rushes you or argues', 'A genuine buyer can wait 30 seconds while you check your app.'],
        ['Receipt shown but no credit', 'A receipt proves nothing until the money is in your balance.'],
        ['Request to refund an overpayment', 'Classic "I sent too much" trick: you refund real money for a fake credit.'],
      ],
    },

    { type: 'h2', id: 'for-businesses', text: 'A simple routine for shops and vendors' },
    {
      type: 'ol',
      items: [
        "**Display your account number clearly** so customers don't need to ask, and ask them to use the exact name shown.",
        '**Check your app before releasing goods,** every time. Tell customers this is your policy so nobody takes it personally.',
        "**Give staff their own way to confirm,** such as a shared device logged in to view transactions, so they never rely on a customer's phone.",
        "**Turn on in-app notifications** so you see credits instantly instead of waiting for SMS.",
        "**Never refund an \"overpayment\"** until the full original amount is in your balance, and refund to the same account it came from.",
      ],
    },

    { type: 'h2', id: 'what-to-do', text: 'What to do if someone sends you a fake alert' },
    {
      type: 'ul',
      items: [
        "**Don't release the goods,** and stay calm. Say you'll hand over once the payment reflects.",
        '**Keep the evidence:** screenshots of the SMS or receipt, the sender number, and any chat messages.',
        "**Report it to your bank** and, if you lost goods or money, to the police. Your bank can flag the account details used.",
        '**Warn your community.** Many scammers repeat the same trick in the same area or online group.',
      ],
    },
    {
      type: 'p',
      text: "If someone claims they sent you money \"by mistake\" and asks for it back, check your balance first. If it never arrived, there is nothing to return. If it did, return it only through your bank, not by sending to a new account they give you. You can read more about real mistaken payments in [what to do if you sent money to the wrong account](/blog/sent-money-to-wrong-account-nigeria/).",
    },
    {
      type: 'p',
      text: 'Fake alerts are one scam among many. For the habits that protect your own account, PIN and phone, read [how to protect your bank account from fraud](/blog/how-to-protect-your-bank-account-from-fraud/).',
    },
  ],
  faqs: [
    {
      q: 'Can someone send a fake alert with my real account number?',
      a: 'Yes. Your account number is not secret, so scammers can put it in a fake SMS to make it look real. That is why you should confirm payments in your banking app, not from SMS.',
    },
    {
      q: 'Is a transfer receipt proof that I have been paid?',
      a: "No. Receipts can be edited or generated by apps. The only proof is the credit appearing in your own account balance and history.",
    },
    {
      q: 'How long should a genuine transfer take to show?',
      a: 'Most transfers between Nigerian banks arrive within seconds. If a buyer insists the payment is pending, it is reasonable to hold the goods until it reflects in your account.',
    },
    {
      q: 'Where do I report a fake alert scam?',
      a: 'Report it to your bank or wallet provider and to the police. Keep screenshots, phone numbers and chat messages as evidence.',
    },
  ],
};
