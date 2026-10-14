import type { Metadata } from 'next';
import { HelpCentre } from './HelpCentre';

export const metadata: Metadata = {
  title: 'Help centre',
  description: 'Answers about opening an account, funding, transfers, security and limits on Fiam Finance.',
};

export default function HelpPage() {
  return <HelpCentre />;
}
