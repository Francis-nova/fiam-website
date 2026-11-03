/**
 * Contact form topics and the details we ask for with each, shown under the topic dropdown
 * and repeated in the visitor's confirmation email (src/lib/contactEmails.ts).
 */
export const CONTACT_TOPICS = {
  'Account help': [
    'The email address or phone number on your Fiam account',
    'What you were trying to do, and what happened instead',
    'Any error message you saw, word for word',
    'The phone model you use (for example, Samsung A14)',
  ],
  'Transfers & funding': [
    'The email address or phone number on your Fiam account',
    'The transaction reference',
    'The amount and the date and time of the transfer',
    "The other bank and account name (the recipient's, or the account you funded from)",
  ],
  'Fraud or lost phone': [
    'The email address or phone number on your Fiam account',
    'What happened and when (for example, phone stolen on Monday evening)',
    "Any transactions you don't recognise: amount, date and recipient",
    'A safe phone number or email we can reach you on now',
  ],
  'Partnerships & press': [
    'Your name, organisation and role',
    "What you'd like to work on together, or your press question",
    'Any deadline we should know about',
  ],
  'Something else': [
    'What your message is about',
    'The email address or phone number on your Fiam account, if it concerns your account',
  ],
} as const satisfies Record<string, readonly string[]>;

export type ContactTopic = keyof typeof CONTACT_TOPICS;
export const TOPIC_NAMES = Object.keys(CONTACT_TOPICS) as ContactTopic[];

export const isContactTopic = (t: string): t is ContactTopic => Object.hasOwn(CONTACT_TOPICS, t);

/** Shown with every topic's checklist. */
export const NEVER_SHARE = 'Never include your PIN, password or one-time codes. Fiam will never ask for them.';
