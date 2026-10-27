import type { Post } from '../types';

export const accountTiers: Post = {
  slug: 'account-tiers-and-limits-nigeria',
  title: 'Account tiers and transfer limits in Nigeria, explained',
  seoTitle: 'Tier 1, 2 & 3 Account Limits Explained',
  description:
    'What Tier 1, Tier 2 and Tier 3 accounts mean in Nigeria, why your bank asks for BVN, NIN and ID, and how to raise your daily transfer limit quickly.',
  excerpt: 'Why your app asks for BVN, NIN and a selfie, what each tier unlocks and how to raise your daily limit.',
  topic: 'accounts-and-limits',
  keywords: ['account tiers', 'transfer limits', 'BVN', 'NIN', 'KYC', 'raise account limit', 'transaction PIN'],
  published: '2026-10-25',
  updated: '2026-10-25',
  body: [
    {
      type: 'p',
      text: "Every bank account and wallet in Nigeria sits on a tier, usually Tier 1, Tier 2 or Tier 3. Your tier decides how much you can send each day and how much you can hold. If a transfer has ever been declined for \"exceeding your limit\", your tier is why. This guide explains what each tier means, why apps ask for your BVN, NIN and ID, and how to raise your limit.",
    },

    { type: 'h2', id: 'why-tiers', text: 'Why accounts have tiers' },
    {
      type: 'p',
      text: "The Central Bank of Nigeria uses a tiered Know Your Customer (KYC) framework. The idea is simple: the more a provider knows about who you are, the more money you can move. A light-touch account is quick to open but tightly limited; a fully verified account has much higher limits.",
    },
    {
      type: 'p',
      text: "This protects you as well as the system. Low limits on lightly verified accounts make them less useful to fraudsters, and they cap how much someone could take if they got into your account.",
    },

    { type: 'h2', id: 'the-tiers', text: 'Tier 1, Tier 2 and Tier 3 at a glance' },
    {
      type: 'table',
      head: ['Tier', 'What you usually provide', 'What it means'],
      rows: [
        ['Tier 1', 'Name, phone number, date of birth, and usually BVN or NIN', 'Quick to open. Lowest daily transfer and balance limits.'],
        ['Tier 2', 'Verified BVN and NIN, plus a government ID and often a selfie', 'Higher daily limits for everyday spending and transfers.'],
        ['Tier 3', 'Everything above, plus proof of address', 'The highest limits, suited to business and large payments.'],
      ],
    },
    {
      type: 'p',
      text: "Exact naira limits differ between banks and wallets and change when regulations are updated, so always check the current figure in your app rather than relying on a number you read online.",
    },
    {
      type: 'callout',
      title: 'Tiers in Fiam',
      text: "**Tier 1:** phone number and BVN, enough for everyday transfers. **Tier 2:** add a government ID and a selfie for higher daily limits. **Tier 3:** proof of address unlocks our highest limits. Your tier and daily limit stay on screen, so a transfer never surprises you. [See tiers and limits](/features/#limits).",
    },

    { type: 'h2', id: 'bvn-nin', text: 'BVN and NIN: what they are and why apps ask' },
    {
      type: 'ul',
      items: [
        '**BVN (Bank Verification Number)** is an 11-digit number linked to your fingerprints and face, issued when you enrol at any bank. It ties your accounts across banks to one verified identity. Dial *565*0# from the phone number registered to it to check yours.',
        "**NIN (National Identification Number)** is the 11-digit number issued by the National Identity Management Commission (NIMC). Many providers now ask for both BVN and NIN when you open or upgrade an account.",
      ],
    },
    {
      type: 'p',
      text: "Sharing your BVN or NIN with a licensed provider during sign-up is normal. Sharing them with someone who calls you is not. Your BVN can't move money on its own, but scammers use it to sound convincing. More on that in [how to protect your bank account from fraud](/blog/how-to-protect-your-bank-account-from-fraud/).",
    },

    { type: 'h2', id: 'raise-limit', text: 'How to raise your transfer limit' },
    {
      type: 'ol',
      items: [
        '**Check your current tier** in your app, usually under Profile, Account or Limits. New to Fiam? Start with [how to open a Fiam account](/blog/how-to-open-a-fiam-account/).',
        "**Make sure your details match.** The name, date of birth and phone number on your account should match your BVN and NIN records exactly. Mismatches are the most common reason upgrades fail.",
        '**Upload a valid government ID,** such as a national ID card, international passport, driver\'s licence or voter\'s card, and take a clear selfie in good light.',
        '**For the top tier, add proof of address,** such as a recent utility bill or bank statement showing your name and address.',
        '**Wait for verification.** Many upgrades are approved within minutes; some need a manual review.',
      ],
    },

    { type: 'h2', id: 'declined', text: 'Why a transfer is declined even when you have money' },
    {
      type: 'ul',
      items: [
        "**You've hit your daily transfer limit** for your tier. It resets the next day, or you can upgrade.",
        "**The amount is above your single-transaction limit,** which can be lower than the daily one.",
        '**Your account has a balance cap,** so an incoming payment may be held or returned if it would take you over.',
        "**The recipient's account is restricted** on their side.",
      ],
    },
    {
      type: 'p',
      text: "Planning a large payment, such as rent or school fees? Check your limit a day or two before so there's time to upgrade. Then follow our guide on [how to send money to any bank in Nigeria](/blog/how-to-send-money-to-any-bank-in-nigeria/).",
    },
  ],
  faqs: [
    {
      q: 'What is a Tier 1 account in Nigeria?',
      a: 'A Tier 1 account is an entry-level account that needs minimal verification. It is quick to open but has the lowest daily transfer and balance limits.',
    },
    {
      q: 'How do I upgrade to Tier 2 or Tier 3?',
      a: 'In most apps you go to your profile or limits page, verify your BVN and NIN, upload a government ID and selfie for Tier 2, and add proof of address for Tier 3.',
    },
    {
      q: 'Why do I need both BVN and NIN?',
      a: 'They confirm your identity from two official sources. Many providers ask for both to meet Central Bank of Nigeria identity requirements before raising your limits.',
    },
    {
      q: 'Is it safe to give my BVN to a fintech app?',
      a: 'Yes, if the app is from a licensed provider and you entered it yourself during sign-up or an upgrade. Never give your BVN to someone who calls or messages you asking for it.',
    },
  ],
};
