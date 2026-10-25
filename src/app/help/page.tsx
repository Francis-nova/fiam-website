import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMetadata, webPageLd } from '@/lib/seo';
import { groups } from './faqs';
import { HelpCentre } from './HelpCentre';

const title = 'Help Centre: Accounts, Transfers & Limits';
const description =
  'Answers on opening a Fiam account, getting your account number, funding, transfer times and fees, PIN resets, limits and what to do if you send to the wrong account.';

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: '/help/',
  keywords: ['Fiam help', 'how to fund Fiam wallet', 'transfer to wrong account', 'reset transaction PIN', 'raise account limit'],
});

export default function HelpPage() {
  return (
    <>
      <JsonLd data={[webPageLd({ type: 'WebPage', name: title, description, path: '/help/' }), breadcrumbLd([{ name: 'Help centre', path: '/help/' }]), faqLd(groups.flatMap((g) => g.items))]} />
      <HelpCentre />
    </>
  );
}
