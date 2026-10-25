import type { Post } from '../types';

export const protectAccount: Post = {
  slug: 'how-to-protect-your-bank-account-from-fraud',
  title: '8 habits that protect your bank account from fraud',
  seoTitle: 'How to Protect Your Bank Account From Fraud',
  description:
    'Eight habits that protect your bank account from fraud in Nigeria: guarding your PIN and OTPs, spotting impersonators, securing your phone and acting fast.',
  excerpt: 'Most account takeovers start with a shared code or a convincing phone call. Eight habits that shut those doors.',
  topic: 'staying-safe',
  keywords: ['bank account fraud', 'transaction PIN', 'OTP', 'payment scam', 'report fraud', 'lost phone'],
  published: '2026-10-25',
  updated: '2026-10-25',
  body: [
    {
      type: 'p',
      text: "Most bank account fraud in Nigeria doesn't involve hacking. It starts with someone convincing you to share a code, tap a link or \"verify\" your details. That means a few habits protect your bank account from fraud better than any technology can. Here are the eight that matter most, and what to do if something has already gone wrong.",
    },

    { type: 'h2', id: 'pin-and-otp', text: '1. Never share your PIN, password or OTP' },
    {
      type: 'p',
      text: "Your transaction PIN and one-time codes (OTPs) are the keys to your money. **No bank, wallet, regulator or customer-care agent will ever ask for them**, by phone, SMS, WhatsApp or email. Anyone who asks is a scammer, however official they sound.",
    },
    {
      type: 'p',
      text: "Be especially careful with OTPs. A code arriving that you didn't request means someone is trying to get into your account. The message itself usually says what it's for, so read it before you do anything.",
    },

    { type: 'h2', id: 'impersonators', text: '2. Hang up on "your bank" and call back yourself' },
    {
      type: 'p',
      text: "Impersonation calls are common: someone claims to be from your bank, the CBN, NIBSS or the police, says your account or BVN has a problem and asks you to \"confirm\" details. Hang up. Contact your bank through its app or the number on its official website, and ask whether there is really a problem.",
    },

    { type: 'h2', id: 'links', text: "3. Don't log in through links in messages" },
    {
      type: 'p',
      text: 'Fake login pages are built to look exactly like your bank. Open your banking app directly instead of following links in SMS, email or social media, especially ones about "account suspension", "BVN update" or "reward" payments.',
    },

    { type: 'h2', id: 'pin-choice', text: '4. Choose a PIN nobody can guess' },
    {
      type: 'ul',
      items: [
        '**Avoid birth years, 1234, 0000 and repeated digits.** These are the first ones a thief tries.',
        '**Use a different PIN from your phone lock and ATM card.** One leaked code then cannot open everything.',
        "**Cover the screen** when entering your PIN in public, and change it straight away if you think someone saw it.",
      ],
    },
    {
      type: 'callout',
      title: 'In Fiam',
      text: 'Your 4-digit transaction PIN is separate from how you log in, and every transfer needs it. Forgot it? Go to Profile → Security → Reset PIN; we verify your identity before you set a new one. [Read about our security](/security/).',
    },

    { type: 'h2', id: 'phone', text: '5. Lock your phone and your SIM' },
    {
      type: 'p',
      text: "Your phone is your bank. Use a screen lock, keep your apps updated and only install banking apps from Google Play or the App Store. Ask your network provider about a SIM PIN, because a stolen SIM can be used to receive your OTPs on another phone.",
    },

    { type: 'h2', id: 'alerts', text: '6. Turn on alerts and actually read them' },
    {
      type: 'p',
      text: "Instant notifications for every credit and debit are your early-warning system. An unfamiliar debit, a login from a new device or an OTP you didn't ask for should trigger action straight away, not tomorrow. Checking your transaction history once a week also catches small test debits that fraudsters use before a bigger theft.",
    },

    { type: 'h2', id: 'pressure', text: '7. Treat urgency as a red flag' },
    {
      type: 'p',
      text: "Scams almost always come with pressure: an investment that closes today, a relative who needs money \"right now\" from a new number, a buyer in a rush, a job that needs an upfront fee. Slow down. Call the person on a number you already have, and never pay because someone is rushing you. If a seller or buyer sends payment proof, confirm it yourself: here's [how to spot a fake credit alert](/blog/how-to-spot-a-fake-credit-alert/).",
    },

    { type: 'h2', id: 'limits', text: '8. Keep your limits sensible' },
    {
      type: 'p',
      text: "Daily transfer limits cap how much a thief can take in one go. If you rarely send large amounts, you don't need the highest tier on the account you use every day. Our guide to [account tiers and limits](/blog/account-tiers-and-limits-nigeria/) explains how the tiers work.",
    },

    { type: 'h2', id: 'if-it-happens', text: "What to do if you think you've been defrauded" },
    {
      type: 'ol',
      items: [
        '**Contact your bank or wallet immediately** through the app or official support line and ask them to freeze or restrict your account.',
        "**Change your PIN and password** from a device you trust, and log out of other devices.",
        "**Write down what happened:** times, amounts, phone numbers, account numbers money went to, and screenshots.",
        "**Report it to the police,** and ask your bank to flag the receiving accounts. Speed gives the receiving bank a chance to hold funds before they're moved on.",
      ],
    },
    {
      type: 'p',
      text: "Lost your phone? Treat it the same way: contact your provider first and freeze the account, then deal with replacing the phone and SIM. With Fiam, [contact us](/contact/#fraud) and we freeze your account right away.",
    },
  ],
  faqs: [
    {
      q: 'Will my bank ever call me and ask for my PIN or OTP?',
      a: 'No. Banks and licensed wallets never ask for your PIN, password or one-time codes. Anyone who does is attempting fraud, even if they know some of your details.',
    },
    {
      q: 'Someone knows my account number and BVN. Is my money at risk?',
      a: 'Your account number and BVN alone cannot be used to move money, but scammers use them to sound convincing. Stay alert to calls and messages using those details and never share your PIN or codes.',
    },
    {
      q: 'What should I do first if I lose my phone?',
      a: 'Contact your bank or wallet provider to freeze your account, then ask your network provider to block the SIM. Do this before replacing the phone.',
    },
    {
      q: 'Can stolen money be recovered?',
      a: 'Sometimes. The faster you report it, the better the chance the receiving bank can hold the funds before they are withdrawn or moved on.',
    },
  ],
};
