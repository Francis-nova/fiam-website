import type { Post } from '../types';

export const openAccount: Post = {
  slug: 'how-to-open-a-fiam-account',
  title: 'How to open a Fiam account in minutes (and get your account number today)',
  seoTitle: 'How to Open a Fiam Account: Step by Step',
  description:
    'Open a Fiam account on your phone with just your phone number and BVN. What you need, every sign-up step, getting your account number and fixing verification.',
  excerpt: 'No bank visit, no forms. What to have ready, every sign-up step, and the one detail that holds most people up.',
  topic: 'accounts-and-limits',
  keywords: ['open Fiam account', 'open account online Nigeria', 'account number', 'BVN', 'account tiers', 'transaction PIN', 'KYC'],
  published: '2026-10-27',
  updated: '2026-10-27',
  body: [
    {
      type: 'p',
      text: "Opening a Fiam account takes a few minutes on your phone. There's no bank visit and no paperwork, and when you finish you have **your own account number** that any Nigerian bank can send money to. This guide shows you exactly what to have ready, every step of sign-up, and the one detail that holds most people up, so you get through first time.",
    },
    {
      type: 'p',
      text: "Bookmark this page or keep it open while you sign up. Each step below matches what you'll see in the app.",
    },

    { type: 'h2', id: 'before-you-start', text: 'Before you start: the 2-minute checklist' },
    {
      type: 'p',
      text: "Most sign-ups that stall do so because something wasn't ready. Tick these off first and the rest is quick:",
    },
    {
      type: 'ul',
      items: [
        '**An Android phone.** Fiam is on Google Play now. The iPhone app is coming; you can [join the waitlist](/#get) to hear the day it launches.',
        "**Your phone number, with the SIM in the phone.** We text a one-time code to it.",
        '**Your BVN (Bank Verification Number).** Forgotten it? Dial *565*0# from the phone number linked to it.',
        '**Your email address,** plus your full name and date of birth **exactly as they appear on your BVN record.**',
        '**A minute of privacy** to choose a passcode and a PIN nobody is watching you type.',
      ],
    },

    { type: 'h2', id: 'steps', text: 'How to open a Fiam account, step by step' },
    {
      type: 'ol',
      items: [
        '**Download Fiam from Google Play.** Search "Fiam Finance", or use the [Get the app](/#get) button on our home page so you know you have the real one.',
        '**Enter your phone number.** We send a one-time code by SMS. Type it in to confirm the number is yours. Never share this code with anyone, including anyone claiming to be from Fiam.',
        '**Add your details:** full name, email address and date of birth. Type them the way they appear on your BVN record, including the order of your names.',
        "**Verify with your BVN.** Enter your 11-digit BVN. We check it against your details; this is what confirms you are who you say you are, and it's why your account is protected.",
        '**Create your login passcode.** This is how you open the app each time.',
        "**Set your 4-digit transaction PIN.** It's separate from your passcode and you'll need it for every transfer. Avoid birthdays, 1234 and repeated digits.",
        "**You're in. Your account number is ready.** Find it on your home screen and on the Fund screen, where you can copy or share it.",
      ],
    },
    {
      type: 'callout',
      title: 'Why two codes?',
      text: 'Your passcode opens the app. Your PIN moves money. Keeping them separate means that even if someone sees you unlock your phone, they still can\'t send a naira without your PIN. More on this in [how Fiam keeps your money safe](/security/).',
    },

    { type: 'h2', id: 'name-mismatch', text: 'The one detail that holds most people up' },
    {
      type: 'p',
      text: "It's not a technical problem. It's names. If the name or date of birth you type doesn't match your BVN record, verification can't confirm you, even when every detail is technically yours.",
    },
    { type: 'p', text: 'Common mismatches to watch for:' },
    {
      type: 'ul',
      items: [
        '**Names in a different order,** such as surname first on your BVN but last in the app.',
        '**A middle name** that is on your BVN but missing in the app, or the other way round.',
        '**A changed surname** after marriage that your BVN record doesn\'t show yet.',
        '**Nicknames or short forms,** like "Tunde" instead of "Babatunde".',
        '**A date of birth** entered in the wrong order or year.',
      ],
    },
    {
      type: 'p',
      text: "If verification fails, check these first and try again. If your BVN details themselves are wrong or out of date, your bank can help you update them. Still stuck? [Contact our support team](/contact/) and we'll walk you through it.",
    },

    { type: 'h2', id: 'first-deposit', text: 'Add your first naira' },
    {
      type: 'p',
      text: "An account feels real the moment money lands in it, so let's do that now. Copy your Fiam account number from the Fund screen, open any Nigerian bank app and send a small amount to it. It arrives in your wallet straight away, and **funding your Fiam wallet is free.**",
    },
    {
      type: 'p',
      text: "Then try the other direction: send a small amount to a friend's bank account. Our guide on [how to send money to any bank in Nigeria](/blog/how-to-send-money-to-any-bank-in-nigeria/) walks through it, including what to check before you confirm.",
    },

    { type: 'h2', id: 'limits', text: 'What you can do on Tier 1, and when to upgrade' },
    {
      type: 'p',
      text: "Every new account starts on Tier 1. In Nigeria, how much you can send and hold depends on how much of your identity has been verified, under the Central Bank of Nigeria's tiered Know Your Customer (KYC) framework. The CBN's published limits are:",
    },
    {
      type: 'table',
      head: ['Tier', 'Daily transaction limit', 'Maximum balance', 'What you add in Fiam'],
      rows: [
        ['Tier 1', '₦50,000', '₦300,000', 'Phone number and BVN'],
        ['Tier 2', '₦200,000', '₦500,000', 'A government ID and a selfie'],
        ['Tier 3', '₦5,000,000', 'No cap', 'Proof of address'],
      ],
    },
    {
      type: 'p',
      text: "These are the CBN's framework figures from its 2017 review; regulators can revise them and providers apply them in their own way, so **your exact limit always shows in the app.** If you plan to receive a salary, pay rent or run a small business through Fiam, upgrade early so a limit never blocks a payment when it matters. Our guide to [account tiers and transfer limits](/blog/account-tiers-and-limits-nigeria/) explains each tier and how to upgrade.",
    },

    { type: 'h2', id: 'secure-it', text: 'Three things to do in your first five minutes' },
    {
      type: 'ol',
      items: [
        '**Turn on notifications** so you see every credit and debit the moment it happens.',
        "**Save Fiam's support contacts** from our [contact page](/contact/), so you know the real ones if anyone ever calls pretending to be us.",
        "**Learn the warning signs of a scam.** Two quick reads: [how to spot a fake credit alert](/blog/how-to-spot-a-fake-credit-alert/) and [8 habits that protect your bank account from fraud](/blog/how-to-protect-your-bank-account-from-fraud/).",
      ],
    },

    { type: 'h2', id: 'summary', text: 'The short version' },
    {
      type: 'p',
      text: "Download Fiam from Google Play, verify your phone number, add your details exactly as they appear on your BVN record, verify your BVN, then create a passcode and a 4-digit PIN. Your account number is ready straight away. Fund it free from any Nigerian bank, and upgrade your tier when you need higher limits.",
    },
  ],
  faqs: [
    {
      q: 'How long does it take to open a Fiam account?',
      a: 'A few minutes. You verify your phone number, add your details and BVN, then set a passcode and PIN. Your account number is ready as soon as you finish.',
    },
    {
      q: 'Can I open a Fiam account without a BVN?',
      a: 'No. Your BVN is how we confirm your identity, which is required by Nigerian regulations and protects your account. You can retrieve a forgotten BVN by dialling *565*0# from the phone number linked to it.',
    },
    {
      q: 'Does it cost anything to open a Fiam account?',
      a: 'No. The app is free to download, opening an account is free and funding your wallet from any Nigerian bank is free.',
    },
    {
      q: 'Is there a Fiam app for iPhone?',
      a: 'Not yet. Fiam is on Android now and the iPhone app is coming. Join the waitlist on our home page to get an email the day it launches.',
    },
    {
      q: 'Why did my BVN verification fail?',
      a: 'Usually because the name or date of birth you entered does not match your BVN record exactly. Check the order of your names, any middle name and your date of birth, then try again or contact support.',
    },
  ],
};
