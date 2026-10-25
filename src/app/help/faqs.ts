import type { QA } from '@/components/Accordion';
import type { IconName } from '@/components/icons.generated';

export const groups: { id: string; title: string; icon: IconName; items: QA[] }[] = [
  {
    id: 'account',
    title: 'Getting started',
    icon: 'solar:user-plus-bold',
    items: [
      {
        q: 'How do I open an account?',
        a: 'Download Fiam from Google Play, sign up with your phone number, verify with the code we send and set your PIN. It takes a few minutes.',
      },
      {
        q: 'How do I get my account number?',
        a: 'Your personal account number is created as soon as you sign up. Find it on the Fund screen, where you can copy or share it.',
      },
      { q: 'Is there an iPhone app?', a: "Not yet. Join the waitlist on our home page and we'll email you when it launches." },
    ],
  },
  {
    id: 'funding',
    title: 'Funding',
    icon: 'solar:card-recive-bold',
    items: [
      { q: 'How do I add money?', a: 'Transfer from any Nigerian bank app to your Fiam account number. It shows up in your wallet straight away.' },
      { q: 'Does funding cost anything?', a: 'Funding your wallet is free.' },
      {
        q: "My deposit hasn't arrived",
        a: "Most deposits arrive within seconds. If it's been more than 30 minutes, contact us with the sender's bank and the transfer reference.",
      },
    ],
  },
  {
    id: 'transfers',
    title: 'Transfers',
    icon: 'solar:plain-bold',
    items: [
      {
        q: 'How long do transfers take?',
        a: 'Transfers to Nigerian banks usually arrive within seconds. You get a receipt with a reference number for every one.',
      },
      { q: 'What does a transfer cost?', a: "A small fee applies to outgoing transfers. It's shown on the review screen before you confirm." },
      {
        q: 'I sent money to the wrong account',
        a: "Transfers can't be reversed once confirmed, which is why we show the recipient's name first. Contact us right away and we'll help you reach the receiving bank.",
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & limits',
    icon: 'solar:shield-check-bold',
    items: [
      { q: 'I forgot my PIN', a: "Go to Profile → Security → Reset PIN. You'll verify your identity before setting a new one." },
      {
        q: 'How do I raise my limits?',
        a: 'Upgrade your tier in the app by adding a government ID and selfie, or proof of address for the highest tier.',
      },
      { q: 'I lost my phone', a: "Contact us straight away and we'll freeze your account until you're back in." },
    ],
  },
];
