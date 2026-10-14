import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Privacy policy' };

// Content based on the live policy at https://usefiam.com/privacy-policy/ (last updated December 2024).
// Paraphrased from a summary of that page, so compare against the original before launch.
const sections: LegalSection[] = [
  {
    id: 'scope',
    title: 'Scope',
    body: 'This policy covers the Fiam website, apps, online services, marketing, events and social media. Fiam currently operates only in Nigeria and is limited to users with Nigerian bank accounts.',
  },
  {
    id: 'law',
    title: 'Legal basis',
    body: 'We handle your personal data in line with the Nigerian Data Protection Regulation (NDPR) 2019 and the Nigeria Data Protection Act (NDPA) 2023. We process data based on your consent, to perform a contract with you, to meet legal obligations, for legitimate interests such as preventing fraud, to protect vital interests, and where it is in the public interest.',
  },
  {
    id: 'collect',
    title: 'What we collect',
    body: 'Identity, contact, transaction, device, profile, usage, marketing preference and location information. We also receive data from third parties and collect some automatically through analytics and cookies.',
  },
  {
    id: 'use',
    title: 'How we use it',
    body: 'To provide and improve our services, fulfil our contract with you, comply with the law, send you notices, keep your account secure, and, subject to your preferences, send you marketing.',
  },
  {
    id: 'share',
    title: 'Who we share it with',
    body: 'Our affiliates, service providers, financial institutions and payment processors, and law enforcement where the law requires it. We do not share your data with other companies for joint marketing without your consent.',
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: 'We use session cookies, persistent cookies and third-party cookies, including Google Analytics. You can limit cookies in your browser settings, though some features may stop working. Our website does not respond to Do Not Track signals.',
  },
  {
    id: 'security',
    title: 'Security and retention',
    body: 'We protect your data with encryption (such as SSL) and access controls. We keep it for as long as needed for its purpose or to meet legal requirements. No system is guaranteed to be 100% secure.',
  },
  {
    id: 'children',
    title: 'Children',
    body: 'Fiam is not intended for anyone under 18, and we do not knowingly collect data from minors.',
  },
  {
    id: 'links',
    title: 'Third-party links',
    body: 'Our services may link to other websites. We are not responsible for their privacy practices.',
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: 'You can ask to access, correct or erase your data, restrict or object to its processing, receive a portable copy, withdraw your consent, and object to automated decisions. You can also complain to the Nigeria Data Protection Commission.',
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: 'We may update this policy at any time. By continuing to use Fiam after an update, you accept the revised policy.',
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: 'Questions about your personal information or this policy? Email hello@usefiam.ng or use the form on our Contact page.',
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="Last updated December 2024"
      sections={sections}
      other={{ label: 'Terms of use', href: '/terms/' }}
    />
  );
}
