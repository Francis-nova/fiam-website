import type { Post } from '../types';

export const sendMoney: Post = {
  slug: 'how-to-send-money-to-any-bank-in-nigeria',
  title: 'How to send money to any bank in Nigeria from your phone',
  seoTitle: 'How to Send Money to Any Bank in Nigeria',
  description:
    'A step-by-step guide to sending money to any Nigerian bank from your phone: what you need, how long transfers take, what they cost and how to fix a pending one.',
  excerpt: 'What you need, the exact steps, how long a transfer takes and what to do when it says "pending".',
  topic: 'sending-money',
  keywords: ['send money to any bank in Nigeria', 'bank transfer', 'instant transfer', 'transfer fees', 'pending transfer', 'NIP'],
  published: '2026-10-25',
  updated: '2026-10-25',
  body: [
    {
      type: 'p',
      text: 'You can send money to any bank in Nigeria from your phone in under a minute, as long as you have the right details and check them before you confirm. This guide walks through what you need, the exact steps, how long transfers take, what they cost and what to do if a transfer is stuck on "pending".',
    },
    {
      type: 'p',
      text: 'The steps are almost the same in every bank app and wallet, so you can use this guide whichever app you have. Where it helps, we show how it works in [Fiam](/features/#send).',
    },

    { type: 'h2', id: 'what-you-need', text: 'What you need before you send' },
    { type: 'p', text: 'Get these four things ready first. Most failed or misdirected transfers come from rushing this part.' },
    {
      type: 'ul',
      items: [
        "**The recipient's 10-digit account number.** Every Nigerian bank account and most wallets use a 10-digit number. Ask the person to copy it from their app rather than reading it out, which is where digits get swapped.",
        '**The right bank or wallet name.** The same 10 digits can belong to different people at different banks, so the bank matters as much as the number.',
        '**Enough in your balance for the amount plus any fee.** Your app should show the fee before you confirm.',
        '**Your transaction PIN.** This is separate from the password or fingerprint you use to log in.',
      ],
    },

    { type: 'h2', id: 'step-by-step', text: 'How to transfer money to another bank, step by step' },
    {
      type: 'ol',
      items: [
        '**Open your app and choose Send or Transfer.** Pick "to bank account" or "other banks", not "to wallet", if the person banks elsewhere.',
        '**Select the bank.** Type the first few letters to search the list instead of scrolling.',
        '**Enter the 10-digit account number.** The app now looks up the account and shows the name it is registered to.',
        '**Check the name that comes back.** This is the single most important step. If the name doesn\'t match who you meant to pay, stop and check the number and bank again.',
        '**Enter the amount and a short note.** A note such as "June rent" or "Invoice 104" makes the payment easy to find later, for you and for them.',
        '**Review the summary.** Look at the name, bank, amount and fee together on one screen.',
        '**Confirm with your PIN.** Never type your PIN on any screen other than your own banking app.',
        "**Save or share the receipt.** The reference number on it is what a bank needs if anything goes wrong.",
      ],
    },
    {
      type: 'callout',
      title: 'How it works in Fiam',
      text: "Fiam shows the recipient's name and the fee on one review screen, then asks for your 4-digit PIN. Every transfer ends with a shareable receipt and a reference number. [See how sending works](/features/#send).",
    },

    { type: 'h2', id: 'how-long', text: 'How long does a bank transfer take in Nigeria?' },
    {
      type: 'p',
      text: 'Most transfers between Nigerian banks arrive within seconds. Instant transfers run on shared payment rails, mainly the NIBSS Instant Payment system (NIP), which connects banks and licensed wallets so money can move between them in real time.',
    },
    { type: 'p', text: "When a transfer is slower, it's usually for one of these reasons:" },
    {
      type: 'ul',
      items: [
        "**The receiving bank's systems are slow or down.** This is the most common cause, and it often clears within minutes.",
        '**Network congestion at peak times,** such as month-end salary days and public holidays.',
        "**The receiving account is restricted,** for example by a post-no-debit or a KYC issue, so the bank can't credit it.",
        '**Your own app timed out** before it got a final answer, so it shows "pending" even though the money has moved.',
      ],
    },

    { type: 'h2', id: 'fees', text: 'What does a transfer cost?' },
    {
      type: 'p',
      text: "Transfer fees in Nigeria are set by each bank or wallet within the Central Bank of Nigeria's guide to charges, so they vary between apps and by amount. Smaller transfers usually cost less than larger ones. A separate ₦50 levy can also apply to electronic transfers of ₦10,000 or more.",
    },
    {
      type: 'p',
      text: 'The rule that matters more than any number: **a good app shows you the full fee before you confirm.** If you only find out what you paid after the money has left, that is a reason to switch apps. Funding your Fiam wallet is free, and any fee on an outgoing transfer appears on the review screen.',
    },

    { type: 'h2', id: 'pending', text: 'What to do if a transfer is pending or failed' },
    { type: 'p', text: 'A pending transfer is stressful, but it rarely means the money is lost. Work through this in order:' },
    {
      type: 'ol',
      items: [
        '**Don\'t send it again yet.** Resending is how people end up paying twice. Wait for a final status first.',
        '**Check the transaction in your history.** Many "pending" transfers flip to successful within a few minutes.',
        "**Ask the recipient to check their balance, not just their SMS.** Alerts can arrive late even when the credit is there.",
        '**If it failed, look for the reversal.** A failed transfer that was debited is normally returned to your balance automatically, often within minutes and sometimes within a day.',
        "**If nothing has moved after 24 hours, contact support** with the reference number from your receipt, the amount and the recipient's bank.",
      ],
    },
    {
      type: 'p',
      text: 'If the transfer succeeded but went to the wrong person, that is a different problem with its own steps. Read [what to do if you sent money to the wrong account](/blog/sent-money-to-wrong-account-nigeria/).',
    },

    { type: 'h2', id: 'tips', text: 'Five habits for safer transfers' },
    {
      type: 'ul',
      items: [
        '**Save people you pay often as beneficiaries,** so you never retype their number.',
        "**Read the name, every time,** even for people you've paid before. Account details sent by message can be swapped by scammers.",
        '**Never pay because of an SMS or a screenshot.** Confirm money has landed in your balance before you release goods. Here is [how to spot a fake credit alert](/blog/how-to-spot-a-fake-credit-alert/).',
        '**Keep your PIN to yourself.** No bank, wallet or customer-care agent will ever ask for it.',
        "**Know your daily limit before a big payment.** Limits depend on your account tier. Our guide to [account tiers and limits](/blog/account-tiers-and-limits-nigeria/) explains how to raise them.",
      ],
    },

    { type: 'h2', id: 'summary', text: 'The short version' },
    {
      type: 'p',
      text: "To send money to any bank in Nigeria: get the 10-digit account number and bank, check the name the app shows, review the amount and fee, confirm with your PIN and keep the receipt. Most transfers land in seconds. If one is pending, don't resend; check your history and contact support with the reference.",
    },
  ],
  faqs: [
    {
      q: 'Can I send money from a wallet app to a traditional bank account?',
      a: 'Yes. Licensed wallets and banks in Nigeria are connected to the same instant payment rails, so you can send from a wallet such as Fiam to any Nigerian bank account and receive from any bank.',
    },
    {
      q: 'Why does my app show a name when I enter an account number?',
      a: "That is a name enquiry. The app asks the receiving bank who owns the account so you can confirm you are paying the right person before any money moves. If the name doesn't match, stop and check the details.",
    },
    {
      q: 'How long does a pending transfer take to resolve?',
      a: 'Most resolve within minutes. If a debited transfer fails, the money is usually reversed automatically, sometimes within a day. If nothing has changed after 24 hours, contact support with your reference number.',
    },
    {
      q: 'Is it safe to share my account number?',
      a: 'Yes. People need your account number to pay you, and it cannot be used on its own to take money out. Never share your PIN, password or one-time codes.',
    },
  ],
};
