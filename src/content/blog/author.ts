/**
 * Author of every blog article. Feeds the byline, the bio box and the Person schema.
 * Optional fields are simply left out of the page and schema until they're filled in.
 */
export const author: {
  name: string;
  /** Role at Fiam, e.g. "Founder & CEO". */
  role?: string;
  bio: string;
  /** Square photo in /public, e.g. "/images/ellis-awuya.jpg". */
  photo?: string;
  links: { linkedin?: string; x?: string };
} = {
  name: 'Ellis Awuya',
  role: 'Content Writer',
  // TODO(author): add photo and profile links once confirmed.
  bio: 'Ellis is a content writer at Fiam. She writes our guides to sending money, staying safe from scams and getting the most from your naira.',
  links: {},
};

export const authorInitials = author.name
  .split(' ')
  .map((w) => w[0])
  .join('');
