import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Terms of use' };

// Draft copy from the design handoff. Needs legal review before launch.
const sections: LegalSection[] = [
  {
    id: 'agree',
    title: 'Agreeing to these terms',
    body: 'By creating a Fiam account or using our app or website, you agree to these terms. Please read them carefully.',
  },
  {
    id: 'eligibility',
    title: 'Who can use Fiam',
    body: 'You must be at least 18, a resident of Nigeria, and able to complete our identity checks.',
  },
  {
    id: 'account',
    title: 'Your account',
    body: 'Keep your login details and PIN private. You are responsible for activity on your account until you tell us it has been compromised.',
  },
  {
    id: 'transfers',
    title: 'Transfers',
    body: 'You confirm each transfer with your PIN after reviewing the recipient and amount. Confirmed transfers cannot be reversed by Fiam.',
  },
  {
    id: 'fees',
    title: 'Fees and limits',
    body: 'Any fee is shown before you confirm a transaction. Your limits depend on your verification tier and may change as regulations require.',
  },
  {
    id: 'prohibited',
    title: 'Prohibited use',
    body: 'You may not use Fiam for fraud, money laundering, or anything illegal. We may suspend accounts we reasonably believe are being misused.',
  },
  {
    id: 'liability',
    title: 'Liability',
    body: 'We work hard to keep Fiam available and secure, but we are not liable for losses caused by events outside our reasonable control.',
  },
  {
    id: 'changes',
    title: 'Changes and contact',
    body: 'We may update these terms and will tell you about significant changes in the app. Questions? Email hello@usefiam.com.',
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      updated="Last updated 10 October 2026 · Draft for legal review"
      sections={sections}
      other={{ label: 'Privacy policy', href: '/privacy/' }}
    />
  );
}
