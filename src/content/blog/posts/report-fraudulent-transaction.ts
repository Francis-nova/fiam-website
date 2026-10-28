import type { Post } from '../types';

export const reportFraud: Post = {
  slug: 'how-to-report-a-fraudulent-transaction-nigeria',
  title: 'How to report a fraudulent transaction in Nigeria',
  seoTitle: 'How to Report a Fraudulent Transaction',
  description:
    'Spotted a debit you did not make? How to report a fraudulent transaction in Nigeria: freeze your account, tell your bank, file a police report and escalate.',
  excerpt: 'A debit you did not make is a race against time. Who to call first, what to tell them and how to escalate if your bank goes quiet.',
  topic: 'staying-safe',
  keywords: ['report fraud', 'unauthorised debit', 'bank account fraud', 'freeze account', 'CBN complaint', 'payment scam'],
  published: '2026-10-28',
  updated: '2026-10-28',
  body: [
    {
      type: 'p',
      text: "If you see a transaction you didn't make, or you've just realised you paid a scammer, report it to your bank or wallet straight away. Fraudsters move stolen money through several accounts within minutes, and every hour you wait makes it harder for the receiving bank to hold the funds. This guide covers what to do in the first few minutes, what to include in your report and where to go if your bank doesn't help.",
    },

    { type: 'h2', id: 'first-minutes', text: 'What to do in the first few minutes' },
    {
      type: 'ol',
      items: [
        '**Contact your bank or wallet and ask them to freeze your account.** Use in-app chat or the support line on the official website, never a number from a text message or a "customer care" page on social media.',
        '**Say clearly that it is fraud.** Use the words "unauthorised transaction" or "I was defrauded" so your report goes to the fraud team, not the general queue.',
        "**Ask them to flag the receiving account** and request a hold on the money with the receiving bank.",
        '**Get a complaint or ticket number** before you end the chat or call. Everything that follows depends on it.',
        '**Change your PIN and password** from a device you trust, and log out of every other device.',
      ],
    },
    {
      type: 'callout',
      title: 'In Fiam',
      text: 'Open the transaction and report it from the receipt, or go to [contact us](/contact/#fraud) and choose "Fraud or lost phone". We freeze your account first, then start a recall with the receiving bank.',
    },

    { type: 'h2', id: 'what-to-include', text: 'What to include in your report' },
    {
      type: 'p',
      text: "Your bank can only chase money it can trace. Write down as much of this as you can while it's fresh, even if you can't fill in every line:",
    },
    {
      type: 'ul',
      items: [
        '**The transaction itself:** amount, date and time, and the reference number from the receipt or alert.',
        '**Where the money went:** the receiving bank, account number and account name.',
        "**How it happened:** a call from someone claiming to be your bank, a link you tapped, a code you shared, a lost phone, or a debit you can't explain at all.",
        '**Evidence:** screenshots of chats, SMS, call logs, the phone numbers that contacted you and any website addresses.',
        '**A short timeline** of what happened and when you noticed it.',
      ],
    },
    {
      type: 'p',
      text: "Be honest about how it happened, including if you shared your PIN or an OTP. Your bank's fraud team has seen it all before, and the right details help them act faster.",
    },

    { type: 'h2', id: 'card-payments', text: 'If it was a card payment' },
    {
      type: 'p',
      text: "Unrecognised debit card charges, often from online stores or subscriptions, follow a slightly different route. Ask your bank to **block the card** and **raise a dispute** on each charge. The bank then challenges the payment through the card network. Report it as soon as you see the charge, because card disputes have deadlines.",
    },

    { type: 'h2', id: 'police', text: 'Report it to the police' },
    {
      type: 'p',
      text: "File a report at your nearest police station, or with the Nigeria Police Force's cybercrime unit for online fraud. Take your bank's complaint number, receipts and screenshots. A police report gives the theft an official record, and banks and courts often ask for one before they release frozen funds. For larger or organised scams, you can also send a petition to the EFCC.",
    },

    { type: 'h2', id: 'what-happens-next', text: 'What happens after you report it' },
    {
      type: 'ol',
      items: [
        'Your bank sends a fraud alert to the receiving bank with the transaction details.',
        'If the money is still there, the receiving bank can place a hold on it while the case is investigated.',
        'Both banks look into the case. This may include checking the receiving account and asking you for more information.',
        'If the claim is upheld and the funds are still available, they are returned to your account.',
      ],
    },
    {
      type: 'p',
      text: "Recovery isn't guaranteed. If the money has already been withdrawn or moved on, there may be nothing left to hold. That's why speed matters more than anything else in this guide.",
    },

    { type: 'h2', id: 'escalate', text: 'How to escalate if your bank stalls' },
    {
      type: 'p',
      text: "Follow up in writing, quoting your complaint number, and keep copies of every reply. If your bank doesn't resolve the complaint or stops responding, escalate to the Central Bank of Nigeria's consumer protection department, which handles complaints about banks and licensed payment providers. Send your complaint number, the receipts, your police report and a short timeline.",
    },

    { type: 'h2', id: 'mistake-or-fraud', text: 'Is it fraud, or something else?' },
    {
      type: 'p',
      text: "Before you report, check that the debit isn't a subscription you forgot about, a charge from a family member using your card or a pending transfer that failed and will reverse on its own. If you sent money to the wrong account yourself, that's a mistaken transfer, not fraud, and the steps are different: see [what to do if you sent money to the wrong account](/blog/sent-money-to-wrong-account-nigeria/).",
    },
    {
      type: 'p',
      text: 'And if you handed over goods after someone showed you a payment that never arrived in your balance, that was a [fake credit alert](/blog/how-to-spot-a-fake-credit-alert/). Report the sender to the police with their screenshots and number.',
    },

    { type: 'h2', id: 'after', text: 'Protect yourself once it is reported' },
    {
      type: 'ul',
      items: [
        "**Expect follow-up scams.** People who've just been defrauded are targeted by fake \"recovery agents\" who promise to get the money back for a fee. Banks and the police never charge to investigate.",
        '**Watch your statements closely** for the next few weeks, including small debits.',
        '**Change passwords on your email,** because it can be used to reset your other accounts.',
        "**Lower your daily limits** if you don't need high ones on your everyday account.",
      ],
    },
    {
      type: 'p',
      text: 'For the habits that stop most of this happening in the first place, read [8 habits that protect your bank account from fraud](/blog/how-to-protect-your-bank-account-from-fraud/).',
    },
  ],
  faqs: [
    {
      q: 'Who should I report a fraudulent transaction to first?',
      a: 'Your own bank or wallet provider, through its app or official support line. Ask them to freeze your account and flag the receiving account before you do anything else.',
    },
    {
      q: 'Can I get my money back after a fraudulent transaction?',
      a: 'Sometimes. If you report it quickly and the money is still in the receiving account, the bank can hold it and return it once the case is resolved. If it has already been moved on, recovery is much harder.',
    },
    {
      q: 'Do I need a police report?',
      a: 'It is strongly recommended. Banks and courts often ask for one before releasing frozen funds, and it gives the theft an official record.',
    },
    {
      q: 'Someone says they can recover my stolen money for a fee. Is that real?',
      a: 'No. Recovery is handled by banks, the police and the courts, and none of them charge you to investigate. Paid "recovery agents" are almost always a second scam.',
    },
    {
      q: 'Where can I complain if my bank does not resolve my fraud report?',
      a: "Escalate to the Central Bank of Nigeria's consumer protection department with your complaint number, receipts, police report and a short timeline.",
    },
  ],
};
