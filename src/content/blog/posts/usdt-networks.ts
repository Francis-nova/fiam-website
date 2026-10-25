import type { Post } from '../types';

export const usdtNetworks: Post = {
  slug: 'trc20-vs-erc20-vs-bep20-usdt-networks',
  title: 'TRC20 vs ERC20 vs BEP20: which USDT network should you use?',
  seoTitle: 'TRC20 vs ERC20 vs BEP20: Which USDT Network?',
  description:
    'TRC20, ERC20 and BEP20 explained for Nigerians sending or receiving USDT: how fees and speed compare, why the wrong network can lose funds and how to choose.',
  excerpt: 'Same USDT, three different roads. How fees and speed compare, and the one mistake that can cost you everything.',
  topic: 'crypto',
  keywords: ['USDT', 'TRC20', 'ERC20', 'BEP20', 'USDT to naira', 'crypto fees', 'wrong network'],
  published: '2026-10-25',
  updated: '2026-10-25',
  body: [
    {
      type: 'p',
      text: "USDT (Tether) is a stablecoin designed to track the US dollar, and it's one of the most widely used cryptocurrencies in Nigeria. But USDT doesn't live on one blockchain. The same token is issued on several networks, and the three you'll see most often are **TRC20, ERC20 and BEP20**. Choosing between them affects the fee you pay, how fast your transfer lands and, if you get it wrong, whether your money arrives at all.",
    },

    { type: 'h2', id: 'what-networks-are', text: 'What TRC20, ERC20 and BEP20 actually mean' },
    {
      type: 'p',
      text: 'Each name is a token standard on a different blockchain. Think of them as three different roads to the same kind of destination: the USDT is worth the same on each, but the roads have different tolls and speeds, and they don\'t connect to each other.',
    },
    {
      type: 'ul',
      items: [
        '**TRC20** is USDT on the **TRON** network. Addresses start with a capital **T**.',
        '**ERC20** is USDT on the **Ethereum** network. Addresses start with **0x**.',
        '**BEP20** is USDT on **BNB Smart Chain**. Addresses also start with **0x**, which is why ERC20 and BEP20 are so easy to mix up.',
      ],
    },

    { type: 'h2', id: 'comparison', text: 'How the networks compare' },
    {
      type: 'table',
      head: ['', 'TRC20 (TRON)', 'ERC20 (Ethereum)', 'BEP20 (BNB Chain)'],
      rows: [
        ['Address starts with', 'T', '0x', '0x'],
        ['Typical fee', 'Low', 'Highest, rises when Ethereum is busy', 'Low'],
        ['Typical speed', 'Usually a few minutes', 'Usually a few minutes', 'Usually a few minutes'],
        ['Support across apps', 'Very wide', 'Very wide', 'Wide, but not everywhere'],
        ['Good for', 'Everyday transfers', 'Larger amounts, or where only ERC20 is accepted', 'Low-cost transfers between apps that support it'],
      ],
    },
    {
      type: 'p',
      text: "Network fees change constantly with demand and the price of each network's own coin, so treat these as general patterns rather than fixed prices. A good app shows you the exact fee before you confirm.",
    },

    { type: 'h2', id: 'wrong-network', text: 'The mistake to avoid: sending on the wrong network' },
    {
      type: 'p',
      text: "**The sender and receiver must use the same network.** If you send TRC20 USDT to an address that only accepts ERC20, or ERC20 to a BEP20 deposit address, the funds can be lost or stuck. Some platforms can recover them for a fee; many can't. Crypto transfers can't be reversed by a bank, so there is no recall like there is for a [naira transfer to the wrong account](/blog/sent-money-to-wrong-account-nigeria/).",
    },
    { type: 'p', text: 'Before every crypto transfer:' },
    {
      type: 'ol',
      items: [
        '**Check which network the receiving address is for.** Your deposit screen should name it clearly.',
        '**Select the same network in the sending app.** Don\'t rely on the address format alone: ERC20 and BEP20 addresses look identical.',
        '**Copy and paste the address,** then check the first and last four characters match.',
        '**Send a small test amount** first when using an address for the first time.',
        "**Review the fee and the amount the recipient will receive** before you confirm.",
      ],
    },

    { type: 'h2', id: 'how-to-choose', text: 'How to choose the right USDT network' },
    {
      type: 'ul',
      items: [
        "**Start with what the receiver supports.** It doesn't matter which network is cheapest if the other side can't accept it.",
        '**For everyday amounts, a low-fee network usually makes sense.** On a small transfer, a high network fee can eat a big share of what you send.',
        "**Compare the fee to the amount.** Paying more on a busy network is easier to justify when you're moving a larger sum.",
        "**Stick to networks you've used successfully** with the same app or person.",
      ],
    },

    { type: 'h2', id: 'naira', text: 'Turning USDT into naira safely' },
    {
      type: 'p',
      text: "Nigeria now regulates digital assets, and exchanges and wallet providers serving Nigerians are expected to register with the Securities and Exchange Commission (SEC). Use a regulated provider, complete its identity checks and make sure naira payouts go to an account in your own name. Be wary of peer-to-peer traders asking you to pay into third-party accounts. That pattern is common in scams and can get your bank account flagged. Our guide to [protecting your bank account from fraud](/blog/how-to-protect-your-bank-account-from-fraud/) covers more warning signs.",
    },
    {
      type: 'callout',
      title: 'Crypto in Fiam (coming soon)',
      text: "Fiam will let you deposit and pay out USDT on TRC-20 and ERC-20, plus BTC and ETH, with balances shown in naira at live rates. Every payout shows the network fee and arrival time before you confirm, and we check the address format matches the network. [Join the waitlist](/crypto/).",
    },
  ],
  faqs: [
    {
      q: 'Is TRC20 USDT the same as ERC20 USDT?',
      a: 'They are both USDT and worth the same, but they live on different blockchains (TRON and Ethereum) and cannot be sent directly to each other. Always use the same network on both sides.',
    },
    {
      q: 'Which USDT network has the lowest fees?',
      a: 'TRC20 and BEP20 are usually much cheaper than ERC20, which gets expensive when Ethereum is busy. Fees change with demand, so check the fee your app shows before confirming.',
    },
    {
      q: 'What happens if I send USDT on the wrong network?',
      a: 'The funds may be lost or stuck. Some platforms can recover them for a fee, but many cannot, and crypto transfers cannot be reversed by a bank. Contact the receiving platform immediately with the transaction hash.',
    },
    {
      q: 'Can I tell the network from the address?',
      a: 'Partly. TRON addresses start with T, while Ethereum and BNB Smart Chain addresses both start with 0x. Because ERC20 and BEP20 addresses look the same, always confirm the network on the deposit screen.',
    },
  ],
};
