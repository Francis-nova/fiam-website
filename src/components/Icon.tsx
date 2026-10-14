import type { CSSProperties } from 'react';
import { icons, type IconName } from './icons.generated';

type Props = { name: IconName; size?: number; color?: string; style?: CSSProperties; className?: string };

/** Inline SVG icon; sized like <iconify-icon> (1em tall, scaled by font-size). */
export function Icon({ name, size, color, style, className }: Props) {
  const icon = icons[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox}
      width={icon.width}
      height="1em"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ fontSize: size, color, flex: 'none', display: 'block', ...style }}
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}
