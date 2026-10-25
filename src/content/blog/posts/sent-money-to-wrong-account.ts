import type { Post } from '../types';

export const wrongAccount: Post = {
  slug: 'sent-money-to-wrong-account-nigeria',
  title: 'Sent money to the wrong account? What to do in Nigeria',
  seoTitle: 'Sent Money to the Wrong Account? Do This',
  description:
    'Sent money to the wrong account in Nigeria? Follow these steps in the first hour, learn how banks recover mistaken transfers and how to escalate if they stall.',
  excerpt: 'The first hour matters most. Here is exactly who to contact, what to send them and how to escalate if the money is not returned.',
  topic: 'sending-money',
  keywords: ['wrong account transfer', 'reverse bank transfer', 'bank transfer', 'pending transfer', 'report fraud', 'CBN complaint'],
  published: '2026-10-25',
  updated: '2026-10-25',
  body: [
    {
      type: 'p',
      text: "If you sent money to the wrong account in Nigeria, act now: the faster your bank contacts the receiving bank, the better the chance the money is still there to recover. A confirmed transfer can't simply be cancelled, but mistaken transfers are recovered every day. This guide covers what to do in the first hour, how the recovery process works and how to escalate if it stalls.",
    },

    { type: 'h2', id: 'first-hour', text: 'What to do in the first hour' },
    {
      type: 'ol',
      items: [
        "**Don't panic, and don't send a second payment yet.** Pay the right person only once you've started the recovery, so you know what you're out of pocket.",
        '**Open the receipt and note the details:** the reference number, amount, date and time, and the recipient bank, account number and name.',
        '**Report it to your own bank or wallet immediately.** Use in-app chat or the official support line, never a number someone sends you. Say clearly that it was a **mistaken transfer** and ask them to contact the receiving bank.',
        "**Ask for a complaint or ticket number.** You'll need it to follow up and to escalate.",
        "**If you know the recipient, contact them politely.** Many people return money they weren't expecting once they're asked.",
      ],
    },
    {
      type: 'callout',
      title: 'In Fiam',
      text: "Open the transaction and report it from the receipt, or [contact support](/contact/). We reach out to the receiving bank right away. The recipient's name you checked on the review screen and your reference number speed this up.",
    },

    { type: 'h2', id: 'how-recovery-works', text: 'How banks recover a mistaken transfer' },
    { type: 'p', text: "Your bank can't pull money back out of another bank on its own. Recovery runs bank to bank:" },
    {
      type: 'ol',
      items: [
        "Your bank sends a formal request to the receiving bank with the transaction details.",
        "The receiving bank checks whether the money is still in the account. If it is, it can place a hold on that amount while the claim is investigated.",
        "Because the transfer was authorised with your PIN, the receiving bank usually contacts its customer and needs their agreement to send the money back.",
        'Once the recipient agrees, the funds come back to your account.',
      ],
    },
    {
      type: 'p',
      text: "When the transfer went wrong because of a bank or system error, rather than a mistyped number, the rules are stricter and banks are expected to reverse it quickly. Either way, **speed is everything**: a hold only works if the money hasn't been spent or moved.",
    },

    { type: 'h2', id: 'recipient-refuses', text: "What if the recipient won't return it?" },
    {
      type: 'p',
      text: "Money credited to someone by mistake doesn't become theirs to keep. Knowingly spending it can expose them to civil and criminal claims. If they refuse or stop responding:",
    },
    {
      type: 'ul',
      items: [
        "**Ask your bank to escalate** and confirm in writing that a hold has been requested.",
        '**Make a written complaint** to both banks and keep copies of every message and receipt.',
        "**Report it to the police** if the recipient refuses outright. A police report also helps if you go further.",
        "**Get legal advice for larger sums.** A court can order the bank to release frozen funds back to you.",
      ],
    },

    { type: 'h2', id: 'escalate', text: 'How to escalate if your bank stalls' },
    {
      type: 'p',
      text: "Give your bank a fair chance to resolve it, and keep your complaint number. If you get no meaningful answer, you can escalate to the Central Bank of Nigeria's Consumer Protection Department, which handles complaints about banks and licensed payment providers. Include your complaint number, the receipt and a short timeline of what you've done.",
    },

    { type: 'h2', id: 'scam-or-mistake', text: 'Was it a mistake, or a scam?' },
    {
      type: 'p',
      text: "If someone told you which account to pay and that account turned out to be wrong, for example a \"new\" account number sent by a supplier over WhatsApp, treat it as fraud, not a typo. Report it as fraud to your bank so they can act faster, and change any passwords you may have shared. Our guide on [protecting your bank account from fraud](/blog/how-to-protect-your-bank-account-from-fraud/) covers the common tricks.",
    },
    {
      type: 'p',
      text: 'The reverse also happens: someone says they sent money to you "by mistake" and asks you to send it back. Check your actual balance first. If the money never arrived, it was a [fake credit alert](/blog/how-to-spot-a-fake-credit-alert/), not an error.',
    },

    { type: 'h2', id: 'prevent', text: 'How to avoid sending to the wrong account' },
    {
      type: 'ul',
      items: [
        "**Read the name the app shows** after you enter the account number, every single time.",
        '**Copy and paste account numbers** instead of retyping them from a photo or voice note.',
        '**Double-check the bank,** not just the number: the same 10 digits can belong to someone else at another bank.',
        '**Send a small test amount** before a large first-time payment.',
        '**Save regular recipients as beneficiaries** so you only enter their details once.',
      ],
    },
    { type: 'p', text: "For the full step-by-step on making a transfer, read [how to send money to any bank in Nigeria](/blog/how-to-send-money-to-any-bank-in-nigeria/)." },
  ],
  faqs: [
    {
      q: 'Can I cancel a bank transfer after it has gone through?',
      a: 'No. Once a transfer is confirmed it cannot be cancelled from your app. Your bank has to request recovery from the receiving bank, which is why you should report it immediately.',
    },
    {
      q: 'How long does it take to recover money sent to the wrong account?',
      a: 'If the recipient agrees quickly, it can be a few days. If they are hard to reach or refuse, it can take weeks and may need escalation to the CBN or legal action.',
    },
    {
      q: 'Can the bank reverse the transfer without the recipient agreeing?',
      a: 'For a mistake you made, the receiving bank usually needs its customer to agree, though it can hold the funds while it investigates. For bank or system errors, and for fraud, banks can act more directly.',
    },
    {
      q: 'Where can I complain if my bank does not help?',
      a: "Escalate to the Central Bank of Nigeria's Consumer Protection Department with your complaint number, receipt and a short timeline of what has happened.",
    },
  ],
};
