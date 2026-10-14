import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Privacy policy' };

const sections: LegalSection[] = [
  {
    id: 'application',
    title: 'Application of this Privacy Policy',
    body: [
      'This Privacy Policy (this "Policy") explains how Fiam Financial Technology ("Fiam," "we," "us," "our") collects, uses, stores, and discloses the personal information of our users ("Users"). This Policy supersedes all previous notices and statements about our privacy practices.',
      'This Policy applies to:',
      {
        list: [
          'our website at https://usefiam.com and all affiliated websites and applications we own and operate (together, the "Website");',
          'our other applications, online services, and related sales, marketing, promotional, and social media activities (together with the Website, our "Services"); and',
          'your offline interactions with Fiam.',
        ],
      },
      'The Services currently operate only in Nigeria and are available only to Users with Nigerian bank accounts.',
      'This Policy applies however you access or use the Services — desktop, laptop, mobile phone, tablet, or other device (each, a "Device") — and forms part of our Terms of Use.',
      'When you submit an inquiry, register for a Fiam account or event, interact with us on social media, enter a competition or promotion, or otherwise volunteer information to us, we may collect personal information, which may include your name, email address, mobile phone number, banking information, image, and other identifying information ("Personal Information").',
      'By accessing or using our Services, you agree to this Policy.',
    ],
  },
  {
    id: 'principles',
    title: 'Guiding Principles',
    body: 'Fiam is committed to the principles of the Nigeria Data Protection Act (NDPA) 2023 and, to the extent its provisions remain in force, the Nigeria Data Protection Regulation (NDPR) 2019. In processing Personal Information, we apply: lawfulness, fairness, and transparency; data accuracy; purpose limitation; data minimisation; storage limitation; integrity and confidentiality; and accountability.',
  },
  {
    id: 'lawful-basis',
    title: 'Lawful Basis for Processing Your Personal Information',
    body: [
      'We process your Personal Information under one or more of the following bases recognised by Nigerian data protection law:',
      {
        list: [
          <><strong>Consent.</strong> Where we rely on consent, we ask for it through a specific, informed, affirmative action — for example, ticking a consent box when you create a Fiam account or opt in to marketing or transactional text messages — rather than inferring it from your general use of the Website. You may withdraw consent at any time by emailing hello@usefiam.com. Withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal, and may mean we can no longer provide some Services to you.</>,
          <><strong>Contractual necessity.</strong> We process Personal Information to perform our contract with you — for example, to open and operate your Fiam account, or to take steps you request before entering into a contract with us.</>,
          <><strong>Legal obligation.</strong> We process Personal Information to comply with Nigerian law, including tax and accounting reporting, labour and payroll requirements, health and safety regulations, and valid legal or regulatory requests, court orders, and subpoenas.</>,
          <><strong>Legitimate interest.</strong> We process Personal Information for purposes such as fraud investigation and prevention, IT and network security, and tailoring marketing to Users, provided this does not override your fundamental rights and freedoms and is consistent with your reasonable expectations.</>,
          <><strong>Vital interest.</strong> Where necessary to protect your vital interests, or those of another person who is physically or legally unable to give consent.</>,
          <><strong>Public interest.</strong> Where necessary to perform a task carried out in the public interest, or under an official authority vested in us.</>,
        ],
      },
      'These bases extend to any additional ground recognised by data protection law in force from time to time.',
    ],
  },
  {
    id: 'collect',
    title: 'Information We Collect and How We Collect It',
    body: [
      <><strong>Information you provide us.</strong> You can browse https://usefiam.com without identifying yourself. As a User, we ask you to create login credentials (such as a username and password) for your Fiam account. If you provide a mobile phone number, we may separately ask for your consent to send you text messages about our Services. We also collect Personal Information you give us by filling out forms, or through phone, email, social media, or other correspondence with us.</>,
      'By providing Personal Information to us, you agree to our collecting, using, storing, and disclosing it as described in this Policy. The categories we may collect include:',
      {
        list: [
          <><strong>Identity information:</strong> first name, last name, maiden name (where applicable), username, marital status, title, date of birth, gender.</>,
          <><strong>Contact information:</strong> billing address, delivery address, email address, telephone number.</>,
          <><strong>Transaction information:</strong> details of your transactions with us and others.</>,
          <><strong>Device information:</strong> information about the Devices you use to access the Website.</>,
          <><strong>Profile information:</strong> username, password, picture, transaction history, interests, preferences, feedback, and survey responses.</>,
          <><strong>Usage information:</strong> details of how you use our Services, which we may aggregate to calculate feature usage across Users.</>,
          <><strong>Marketing and communications information:</strong> your preferences for marketing from us and third parties, and your communication preferences.</>,
          <><strong>Location information:</strong> your current location, where disclosed by GPS or similar technology.</>,
        ],
      },
      'We may also collect and share aggregated statistical or demographic data that does not identify you, for any purpose.',
      <><strong>Information about your transactions.</strong> We collect Personal Information about your transactions with us and with others.</>,
      <><strong>Information from third parties.</strong> We may receive Personal Information about you from other companies — for example, a consumer reporting agency, or your employer where your employer provides a service to Fiam. We may also collect your Personal Information where another User names you on a next-of-kin form.</>,
      <><strong>Information automatically collected.</strong> We, or service providers acting for us, collect information about your use of our Services, which may include Personal Information and statistical information that does not identify you ("Analytics"). Where Analytics are combined with Personal Information, we treat the combination as Personal Information. This may include:</>,
      {
        list: [
          <><strong>Device information:</strong> hardware model, operating system version, unique device identifiers, mobile network information (including your mobile phone number), which we may associate with your Fiam account.</>,
          <><strong>Log information:</strong> your Device's IP address, device identifiers, crash and system activity data, hardware settings, location preferences, date/time stamps of transactions, system configuration, and other interactions with our Services.</>,
        ],
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies, Similar Technologies, and Do-Not-Track',
    body: [
      <>We use cookies to personalise your experience and to collect aggregate usage information. A cookie is a text file or similar identifier stored by your browser or app. General information about cookies is available at <a href="https://www.allaboutcookies.org">allaboutcookies.org</a>.</>,
      {
        list: [
          <><strong>Session cookies:</strong> temporary cookies erased when you close your browser; used to grant access to content and features that require you to be logged in.</>,
          <><strong>Persistent cookies:</strong> remain until they expire or you delete them; used to understand usage patterns, remember your Fiam account, or remember your preferences.</>,
          <><strong>Third-party cookies:</strong> we permit selected third parties to place cookies to give us insight into usage and demographics and to advertise our Services. For example, we use Google Analytics, which places a cookie to compile usage reports for us; Google may use part of your IP address to identify its own cookie, but does not associate this with other data it holds. We do not control third-party cookies or their use of the resulting information, and we are not responsible for third parties' actions or policies.</>,
        ],
      },
      "By using our Services, you consent to cookies being placed on your Device as described here. You can control cookies through your browser's privacy settings; if you block all cookies, some features of our Services may not work.",
      <><strong>Do Not Track.</strong> We do not currently respond to "Do Not Track" browser signals.</>,
    ],
  },
  {
    id: 'use',
    title: 'How We Use Your Information',
    body: [
      'We use your Personal Information and Analytics to:',
      {
        list: [
          'fulfil our contractual obligations to you (for example, providing the Services you request);',
          'send important notices, such as updates to our Services, terms, conditions, and policies;',
          'support internal purposes such as auditing, data analysis, and network/IT security;',
          'offer products and services — ours and, where relevant, those of third parties we think may interest you; and',
          'respond to your inquiries.',
        ],
      },
      'Only Fiam and the third-party service providers involved in distributing an offer or providing a product or service have access to the related Personal Information, and they may use it only for that purpose.',
      'You may opt out of promotional emails by unsubscribing or contacting us (see Contact Us). Even after opting out, we may still send non-promotional emails about your Fiam account or our ongoing relationship, unless you withdraw consent to electronic communications generally under our Terms of Use.',
    ],
  },
  {
    id: 'share',
    title: 'How We Share Your Information',
    body: [
      'We share your Personal Information:',
      {
        list: [
          'when you request or authorise it;',
          "to help complete a transaction you've initiated;",
          'with our affiliated companies and service providers;',
          'with financial service providers, including the financial institutions identified in your cardholder bank agreement, that provide banking services connected to your Fiam account;',
          "with another User, when you sign up via their referral link (that User may learn that you enrolled);",
          'with non-financial companies that perform marketing services on our behalf, and fraud-prevention providers;',
          "with a non-affiliated third party you've authorised to access and transmit your personal and financial information from a relevant institution — in that case, the third party's own privacy policy governs how it handles your data;",
          'with business partners, suppliers, and sub-contractors, for performance of a contract we have with them or with you;',
          'with third parties in connection with a sale, transfer, merger, or acquisition of all or part of our business or assets;',
          'in response to a lawful request — regulatory, governmental, court order, subpoena, or other legal process;',
          'for our everyday business purposes;',
          'to publicise our events and competitions in digital and print media;',
          'to protect our rights, property, or safety, or those of our Users or others; and',
          "with law enforcement, investigators, or auditors, where we believe it's appropriate to investigate fraud.",
        ],
      },
      'We do not share your Personal Information with other companies for joint marketing without your consent, or with third parties solely so they can market to you.',
      'If you give us bank account, debit card, or other payment information, we may share it with third-party payment processors and service providers, only to the extent necessary to provide the relevant Services.',
      'We may continue to share your information as described in this Policy, as permitted by law, even after you stop being a User.',
      'We may disclose Analytics to third parties for our commercial purposes.',
    ],
  },
  {
    id: 'rights',
    title: 'Opt-Out Rights and Your Data Protection Rights',
    body: [
      <><strong>Opt-out.</strong> You can opt out of receiving marketing offers or notices by contacting us (see Contact Us) or following the unsubscribe instructions in any communication from us. As a User, you cannot opt out of communications about your Fiam account or related transactions.</>,
      'You also have the following rights over your Personal Information:',
      {
        list: [
          <><strong>Correction:</strong> ask us to correct inaccurate information. Users can update some details directly in their Fiam account profile; changes to financial details and requests from non-Users should go through Contact Us. Corrections apply only to future use of your information, and we may need to verify new data before applying it.</>,
          <><strong>Access:</strong> ask whether we hold Personal Information about you, and request a copy. We will ask for proof of identity first and may decline if you cannot provide it.</>,
          <><strong>Data portability:</strong> request your Personal Information in a commonly used electronic format, where it was provided by you and processing is based on consent or is necessary to perform a contract by automated means.</>,
          <><strong>Restriction/objection:</strong> object to processing that affects your fundamental rights and freedoms, including direct marketing. We may continue processing where we have compelling legitimate grounds that override your rights.</>,
          <><strong>Erasure:</strong> ask us to delete Personal Information where there is no good reason for us to keep it, where you've successfully objected to processing, where we've processed it unlawfully, or where erasure is required by law. We may be unable to comply fully for specific legal reasons, which we will explain if applicable.</>,
          <><strong>Transfer to a third party:</strong> ask us to provide your Personal Information, in a structured, commonly used, machine-readable format, to you or a third party you nominate — for automated information you consented to, or that we used to perform a contract with you.</>,
          <><strong>Withdraw consent:</strong> withdraw consent at any time where we rely on it. This does not affect the lawfulness of prior processing, and may limit the Services we can provide.</>,
          <><strong>Object to automated decisions:</strong> object to decisions made solely by automated processing, including profiling, that have a legal or similarly significant effect on you, except where you've consented, the decision is necessary to enter into or perform a contract with us, or appropriate safeguards are in place. Where we rely on automated decision-making in this way, we provide a path to human intervention, let you express your views, and let you contest the decision.</>,
          <><strong>Complain to the regulator:</strong> lodge a complaint with the Nigeria Data Protection Commission (NDPC) if you believe our processing violates data protection law. See the <a href="https://ndpc.gov.ng">NDPC website</a>.</>,
        ],
      },
    ],
  },
  {
    id: 'third-parties',
    title: 'Information You Share Socially, and Third-Party Links',
    body: [
      'Our Services may let you connect and share actions, comments, content, and information publicly or with others, and may let you connect with us on, or use, third-party websites, applications, and services. We are not responsible for the confidentiality of anything you share publicly or with others, and we do not control the privacy or security practices of third parties. Please review the privacy policies of any third-party site or service directly.',
      'When you use our Services, you may be directed to third-party websites beyond our control, and we may allow third-party sites to link to our Services. We are not responsible for the privacy practices or content of linked sites. This Policy applies only to our Services.',
    ],
  },
  {
    id: 'security',
    title: 'Security, Storage, and Retention of Your Information',
    body: [
      'We maintain administrative, technical, and physical safeguards designed to prevent your Personal Information from being accidentally lost, or used or accessed without authorisation. Bank account information transmitted through our Services is protected using encryption technology such as TLS/SSL. We limit access to Personal Information to employees, agents, contractors, and other third parties who need it for their role, and they may process it only on our instructions. We require our third-party service providers that receive Personal Information from us to maintain a comparable written information security program.',
      'We have procedures to address a suspected personal data breach and will notify affected Users and the relevant regulator where we are legally required to do so.',
      'No method of electronic transmission or storage is 100% secure, so we cannot guarantee absolute security. Please help protect your account by keeping your email address, username, and password confidential.',
      'If we receive instructions using your Fiam account login or other account security credentials, we will treat them as authorised by you. Notify us immediately of any unauthorised use of your account or other security breach. We reserve the right to decline to provide our Services, terminate accounts, or remove or edit content, at our discretion.',
      <><strong>Retention.</strong> We retain Personal Information only as long as necessary to fulfil the purpose it was collected for, including legal, accounting, tax, and reporting requirements. We determine retention periods based on the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorised use or disclosure, and applicable legal requirements.</>,
      'You may request that we delete your Personal Information entirely; where we must retain some information to meet legal obligations (tax, legal reporting, auditing), we will retain only what is necessary for that purpose.',
      'For more detail on retention periods, contact us (see Contact Us).',
    ],
  },
  {
    id: 'children',
    title: "Protecting Children's Privacy",
    body: 'Our Services are not directed to, or intended to be attractive to, children under the age of eighteen (18), and we do not knowingly collect Personal Information from them. If you are under eighteen (18), please do not use our Services or submit information to us.',
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    body: 'We may revise this Policy at any time, as permitted by law. When we do, we will post the revised version through our Services and update the "Last updated" date above. The revised Policy takes effect once posted, unless stated otherwise or required by law. Continuing to access or use our Services after a revised Policy takes effect means you accept it; if you disagree with a revised Policy, your option is to stop using our Services. Except where we state otherwise, your use of our Services is governed by the version of this Policy in effect at the time.',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: [
      'If you have questions, comments, or concerns about your Personal Information or this Policy, contact us at:',
      { list: ['Email: hello@usefiam.com'] },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="Last updated 14 October 2026"
      sections={sections}
      other={{ label: 'Terms of use', href: '/terms/' }}
    />
  );
}
