import type { Post } from '../types';

export const tier3Limit: Post = {
  slug: 'what-tier-1-2-3-mean-tier-3-account-limit',
  title: 'What Tier 1, 2 and 3 mean, and how much a Tier 3 account can hold',
  seoTitle: 'How Much Can a Tier 3 Account Hold?',
  description:
    'Tier 1, 2 and 3 limits in Nigeria in naira: what each tier can hold and receive, why a Tier 3 account has no balance cap, and how transfer limits differ.',
  excerpt: 'The CBN figures behind each tier, why Tier 3 has no balance cap, and why your transfer limit is a separate number.',
  topic: 'accounts-and-limits',
  keywords: ['account tiers', 'tier 3 account', 'tier 3 maximum balance', 'tier 1 limit', 'tier 2 limit', 'KYC', 'transfer limits'],
  published: '2026-10-29',
  updated: '2026-10-29',
  body: [
    {
      type: 'p',
      text: "Short answer: a Tier 3 account has **no maximum balance** under Central Bank of Nigeria (CBN) rules. That applies at every bank and licensed wallet. Tier 1 and Tier 2 accounts are capped at **₦300,000** and **₦500,000**. What still limits a Tier 3 account is how much you can send per day, and that limit comes from your bank, not from your tier. This guide explains the numbers behind each tier and where they come from.",
    },

    { type: 'h2', id: 'what-tiers-mean', text: 'What Tier 1, 2 and 3 mean' },
    {
      type: 'p',
      text: "Tiers are levels of Know Your Customer (KYC) verification. The CBN introduced the three-tier system in January 2013 so that people without much paperwork could still open an account. The trade-off is simple: the less a bank knows about you, the less money the account can hold and receive.",
    },
    {
      type: 'ul',
      items: [
        '**Tier 1** is the entry level, opened with basic details and your BVN or NIN. It is meant for low-value, everyday banking.',
        '**Tier 2** adds a verified ID and both your BVN and NIN. It suits most salary earners and small traders.',
        '**Tier 3** is full verification: ID, BVN, NIN and proof of address. Most standard savings and current accounts opened at a branch are Tier 3.',
      ],
    },
    {
      type: 'p',
      text: "Since December 2023, the CBN has required a BVN or NIN for Tier 1, and both for Tier 2 and Tier 3. That means no new account is fully anonymous, even at the lowest tier.",
    },

    { type: 'h2', id: 'limits-table', text: 'Tier 1, 2 and 3 limits in naira' },
    {
      type: 'p',
      text: 'These are the CBN limits for bank accounts, last revised in July 2016 and still in force as at October 2026:',
    },
    {
      type: 'table',
      head: ['Tier', 'Largest single deposit', 'Maximum balance', 'What you need'],
      rows: [
        ['Tier 1', '₦50,000', '₦300,000', 'Basic details plus BVN or NIN'],
        ['Tier 2', '₦100,000', '₦500,000', 'BVN, NIN and a verified ID'],
        ['Tier 3', 'No CBN cap', 'No CBN cap', 'BVN, NIN, ID and proof of address'],
      ],
    },
    {
      type: 'p',
      text: "**Largest single deposit** is the most one payment into the account can be. On Tier 1, a ₦70,000 transfer to you may be returned or held, even if your balance is low. **Maximum balance** is the most the account can hold at any time. A payment that would push you over it may be rejected.",
    },
    {
      type: 'callout',
      title: 'Wallets use slightly different numbers',
      text: "Mobile money wallets follow separate CBN guidelines with daily limits instead of a single-deposit cap. The usual figures are ₦50,000 a day for the lowest level, ₦200,000 for the middle and ₦5,000,000 for the top, with the same ₦300,000 and ₦500,000 balance caps on the lower two. Your provider's app shows which rules apply to your account.",
    },

    { type: 'h2', id: 'tier-3-hold', text: 'How much can a Tier 3 account hold?' },
    {
      type: 'p',
      text: "As much as you want. The CBN sets no balance cap and no single-deposit cap for Tier 3. Once you have provided full identification, the account can receive and hold large sums, such as a salary, the proceeds of a property sale or a business's daily takings.",
    },
    {
      type: 'p',
      text: "That doesn't mean large amounts go unnoticed. Banks still watch for unusual activity, and very large cash deposits come with their own reporting rules and charges. For money arriving by transfer from a verified source, a Tier 3 account has no ceiling.",
    },

    { type: 'h2', id: 'transfer-limits', text: 'Balance limits and transfer limits are not the same' },
    {
      type: 'p',
      text: "This is the most common source of confusion. Your **tier** decides how much your account can hold and receive. Your **daily transfer limit** decides how much you can send out, and each bank sets it for each channel (app, USSD, internet banking). A Tier 3 account with a ₦100,000 daily USSD limit can still hold ₦50 million.",
    },
    {
      type: 'p',
      text: "Many daily limits you see quoted online are a particular bank's own settings, not CBN tier rules. So if a transfer is declined on a Tier 3 account, upgrading your tier won't help. Look at the limit for the channel you are using, or try the app instead of USSD, where limits are usually higher. Most banks let you raise a channel limit in the app with a token, or at a branch.",
    },

    { type: 'h2', id: 'which-tier', text: 'How to check your tier and upgrade' },
    {
      type: 'ol',
      items: [
        '**Check your tier** in your banking app, usually under Profile, Account or Limits, or ask your bank.',
        '**Make sure your BVN and NIN are both linked,** and that your name and date of birth match on both. Mismatches are the most common reason upgrades fail.',
        '**For Tier 2, upload a valid ID,** such as your national ID card, international passport, driver\'s licence or voter\'s card.',
        '**For Tier 3, add proof of address,** such as a recent utility bill.',
      ],
    },
    {
      type: 'p',
      text: "For a step-by-step walkthrough and the reasons upgrades get rejected, see [account tiers and transfer limits in Nigeria, explained](/blog/account-tiers-and-limits-nigeria/).",
    },
    {
      type: 'callout',
      title: 'Tiers in Fiam',
      text: "Fiam uses the same three tiers. **Tier 1** needs your phone number and BVN, **Tier 2** adds a government ID and a selfie, and **Tier 3** adds proof of address for our highest limits. Your current limits are always shown in the app under Profile → Account limits. [See tiers and limits](/features/#limits).",
    },
  ],
  faqs: [
    {
      q: 'How much can a Tier 3 account hold in Nigeria?',
      a: 'There is no maximum. CBN rules set no balance cap and no single-deposit cap for Tier 3 accounts. Your bank may still set daily limits on how much you can send.',
    },
    {
      q: 'What is the limit for Tier 1 and Tier 2 accounts?',
      a: 'Tier 1 accounts can hold up to ₦300,000, with a single deposit of up to ₦50,000. Tier 2 accounts can hold up to ₦500,000, with a single deposit of up to ₦100,000.',
    },
    {
      q: 'Why was my transfer declined if I have a Tier 3 account?',
      a: "Your tier controls how much you can hold, not how much you can send. The daily transfer limit is set by your bank for each channel, and USSD limits are often lower than app limits. Check that limit or try a different channel.",
    },
    {
      q: 'How do I know which tier my account is?',
      a: 'Check your banking app under Profile, Account or Limits, or ask your bank. An account opened at a branch with an ID and proof of address is usually Tier 3.',
    },
  ],
};
