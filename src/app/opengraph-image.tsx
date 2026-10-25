import { ogImage, ogSize } from '@/lib/og';

export const alt = 'Fiam: your naira, calm and in control';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage({ eyebrow: 'Fiam Finance', title: 'Your naira, calm and in control.' });
}
