import type { SVGProps } from 'react';

/** Line glyphs from the Fiam UI kit (24×24, currentColor). Size them with CSS or the `size` prop. */
const paths = {
  up: <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  down: <path d="M17 7 7 17M15 17H7V9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  plus: <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  bell: <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Zm4 4.5a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  back: <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  layers: (
    <>
      <path d="m12 4 9 5-9 5-9-5 9-5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m3 14 9 5 9-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  review: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 9h6M9 13h6M9 17h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  play: (
    <>
      <path d="M4.6 2.9c-.3.3-.4.7-.4 1.2v15.8c0 .5.1.9.4 1.2l.1.1 8.8-8.8v-.2L4.7 2.8l-.1.1Z" fill="#00D7FE" />
      <path d="m16.4 15.3-2.9-2.9v-.2l2.9-2.9.1.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2-.1-.2Z" fill="#FFBC00" />
      <path d="M16.5 15.2 13.5 12.2 4.6 21.1c.3.3.9.4 1.5 0l10.4-5.9" fill="#FF3A44" />
      <path d="M16.5 9.2 6.1 3.3c-.6-.4-1.2-.3-1.5 0l8.9 8.9 3-3Z" fill="#48FF48" />
    </>
  ),
  apple: (
    <path
      fill="currentColor"
      d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-4Zm-2.4-7.1c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3Z"
    />
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
};

export type GlyphName = keyof typeof paths;

export function Glyph({ name, size, ...rest }: { name: GlyphName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...rest}>
      {paths[name]}
    </svg>
  );
}

// Paths from the brand files "fiam logo dark.svg" / "Fiam logo white.svg" (same shapes, only the wordmark colour differs).
const markPaths = (
  <>
      <path d="M151.97 375.954C175.901 347.268 181.923 317.683 168.142 284.906C163.61 274.126 156.378 265.328 148.152 257.149C102.462 211.641 56.8646 166.039 11.1432 120.531C8.38069 117.773 4.90426 115.667 0 111.918C70.5841 104.545 131.111 115.078 180.123 167.309C226.496 216.69 275.663 263.5 323.836 311.208C328.896 316.226 330.23 318.953 324.426 324.684C303.909 344.82 284.819 366.723 254.68 372.826C248.255 374.127 241.736 375.707 235.249 375.8C208.245 376.14 181.271 375.954 151.97 375.954Z" />
      <path d="M115.336 42.953C149.884 43.7275 183.655 39.979 216.526 51.0696C241.543 59.4959 263.582 72.4143 282.205 90.9089C325.94 134.311 369.302 178.084 413.224 221.301C419.618 227.589 419.028 230.625 412.944 236.356C396.804 251.567 381.315 267.46 365.733 283.259C361.884 287.162 359.587 289.424 354.31 284.126C275.128 204.727 195.698 125.575 116.33 46.3297C115.864 45.865 115.864 44.8737 115.336 42.953Z" />
      <path d="M387.717 140.389C404.789 123.196 423.599 112.57 445.358 111.331C475.559 109.596 505.916 110.897 539.718 110.897C516.035 134.1 494.276 155.476 472.424 176.79C464.819 184.194 456.408 197.701 449.424 197.05C440.826 196.245 433.345 183.574 425.399 176.046C412.921 164.212 400.443 152.409 387.748 140.42L387.717 140.389Z" />
  </>
);

/** The Fiam mark: the F tilted into a bird in flight. */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 30 545 350" aria-hidden="true" focusable="false" {...props}>
      <g fill="#53BC7B">{markPaths}</g>
    </svg>
  );
}

/**
 * Full logo: mark plus "fiam." wordmark. The wordmark uses currentColor, so it renders as the
 * dark logo (#042323) or the white logo depending on the text colour of its container.
 */
export function LogoLockup({ title = 'Fiam', ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg viewBox="0 0 1789 376" role="img" aria-label={title} {...props}>
      <g fill="#53BC7B">
        {markPaths}
        <path d="M1744.18 375.989C1768.81 375.989 1788.79 356.017 1788.79 331.379C1788.79 306.742 1768.81 286.77 1744.18 286.77C1719.54 286.77 1699.57 306.742 1699.57 331.379C1699.57 356.017 1719.54 375.989 1744.18 375.989Z" />
      </g>
      <g fill="currentColor">
        <path d="M616.187 156.34V106.687H772.672V156.34H616.187ZM648.753 369.591V95.9877C648.753 65.8112 657.08 43.4813 673.766 29.0289C690.451 14.5765 715.155 7.35027 747.876 7.35027H775.086V59.4534H743.015C732.955 59.4534 725.277 62.1206 719.922 67.486C714.566 72.8514 711.904 80.3877 711.904 90.1261V369.622H648.722L648.753 369.591ZM795.517 155.844V105.199H896.59V155.844H795.517ZM853.344 73.5647C840.373 73.5647 830.746 70.0911 824.431 63.082C818.116 56.1039 814.958 47.265 814.958 36.5342C814.958 25.8035 818.116 17.0576 824.431 10.2345C830.746 3.41152 840.373 0 853.344 0C866.315 0 876.437 3.41152 882.753 10.2345C889.068 17.0576 892.225 25.8035 892.225 36.5342C892.225 47.265 889.068 56.1039 882.753 63.082C876.437 70.0601 866.624 73.5647 853.344 73.5647ZM829.043 369.591V105.23H896.59V369.622H829.043V369.591Z" />
        <path d="M1050.33 375.999C1031.07 375.999 1014.21 372.601 999.691 365.804C985.168 359.007 973.918 349.307 965.939 336.702C957.93 324.097 953.941 308.897 953.941 291.102C953.941 271.701 958.74 255.852 968.37 243.556C978 231.26 991.526 222.054 1008.98 215.906C1026.43 209.758 1046.91 206.7 1070.37 206.7H1132.02V246.955H1069.41C1053.76 246.955 1041.76 250.754 1033.44 258.354C1025.12 265.954 1020.98 275.748 1020.98 287.704C1020.98 299.66 1025.12 309.361 1033.44 316.806C1041.76 324.251 1053.73 327.959 1069.41 327.959C1078.88 327.959 1087.58 326.26 1095.59 322.861C1103.56 319.463 1110.26 313.655 1115.66 305.406C1121.05 297.157 1124.04 285.943 1124.69 271.701L1141.34 290.608C1139.68 309.052 1135.23 324.56 1127.87 337.165C1120.55 349.77 1110.42 359.409 1097.55 366.02C1084.65 372.632 1068.94 375.968 1050.33 375.968V375.999ZM1135.94 369.202V291.102H1124.69V204.29C1124.69 189.09 1120.95 177.783 1113.44 170.337C1105.93 162.892 1094.37 159.184 1078.69 159.184C1070.53 159.184 1060.74 159.339 1049.34 159.679C1037.93 160.019 1026.43 160.42 1014.84 160.884C1003.24 161.378 992.897 161.934 983.766 162.583V105.367C991.277 104.718 999.753 104.069 1009.2 103.421C1018.64 102.772 1028.36 102.37 1038.3 102.216C1048.25 102.061 1057.63 101.969 1066.45 101.969C1093.84 101.969 1116.59 105.521 1134.7 112.627C1152.8 119.733 1166.49 130.886 1175.8 146.085C1185.09 161.285 1189.73 181.181 1189.73 205.742V369.202H1135.91H1135.94Z" />
        <path d="M1259.85 369.559V103.911H1313.96V217.898H1309.04C1309.04 191.161 1312.49 168.726 1319.38 150.621C1326.28 132.516 1336.52 118.837 1350.12 109.52C1363.72 100.234 1380.71 95.5905 1401.04 95.5905H1403.99C1424.64 95.5905 1441.78 100.234 1455.41 109.52C1469.01 118.805 1479.19 132.516 1485.9 150.621C1492.6 168.726 1495.99 191.161 1495.99 217.898H1478.78C1478.78 191.161 1482.29 168.726 1489.38 150.621C1496.43 132.516 1506.77 118.837 1520.37 109.52C1533.97 100.234 1550.95 95.5905 1571.29 95.5905H1574.23C1594.88 95.5905 1612.12 100.234 1625.87 109.52C1639.66 118.805 1650.06 132.516 1657.11 150.621C1664.16 168.726 1667.7 191.161 1667.7 217.898V369.559H1599.33V211.541C1599.33 194.901 1595.07 181.626 1586.55 171.686C1578.02 161.745 1565.9 156.76 1550.13 156.76C1534.37 156.76 1521.78 161.901 1512.25 172.184C1502.72 182.468 1497.99 196.241 1497.99 213.535V369.59H1429.62V211.572C1429.62 194.932 1425.36 181.657 1416.83 171.717C1408.31 161.777 1396.18 156.791 1380.42 156.791C1364.66 156.791 1352.06 161.932 1342.54 172.216C1333.01 182.499 1328.28 196.272 1328.28 213.566V369.621H1259.91L1259.85 369.559Z" />
      </g>
    </svg>
  );
}

/** iOS status bar icons (signal, wifi, battery) for the phone mockups. */
export function StatusIcons() {
  return (
    <svg viewBox="0 0 64 12" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="6" width="3" height="6" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" />
        <path d="M30 3.2a8.5 8.5 0 0 1 11 0l-1.4 1.5a6.4 6.4 0 0 0-8.2 0L30 3.2Zm2.6 2.9a4.7 4.7 0 0 1 5.8 0L35.5 9l-2.9-2.9Z" />
        <rect x="45" y="1" width="16" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <rect x="47" y="3" width="11" height="6" rx="1.5" />
        <rect x="62" y="4" width="1.6" height="4" rx=".8" />
      </g>
    </svg>
  );
}
