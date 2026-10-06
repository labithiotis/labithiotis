import type { SVGProps } from 'react';

type IconName =
  | 'arrow'
  | 'forward'
  | 'github'
  | 'mountain'
  | 'back'
  | 'status'
  | 'price'
  | 'music'
  | 'cube'
  | 'chat'
  | 'chart'
  | 'calendar'
  | 'code'
  | 'globe'
  | 'pin'
  | 'desktop'
  | 'family'
  | 'game'
  | 'mail'
  | 'linkedin'
  | 'toptal'
  | 'stack';

const paths: Record<IconName, React.ReactNode> = {
  cube: (
    <>
      <path d="m12 3 9 5v9l-9 5-9-5V8l9-5Z" />
      <path d="m3 8 9 5 9-5M12 13v9M7.5 5.5l9 5" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2v-10a9.5 9.5 0 0 1 19 0Z" />
      <circle cx="8" cy="11" r=".7" />
      <circle cx="15" cy="11" r=".7" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h17M8 16v-5m5 5V7m5 9v-8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 2v6m10-6v6M3 11h18" />
    </>
  ),
  code: (
    <>
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  desktop: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="1.5" />
      <path d="M12 17v4m-5 0h10" />
    </>
  ),
  family: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3m3-17a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 4v3" />
    </>
  ),
  game: (
    <>
      <path d="M7 7h10a4 4 0 0 1 4 3l1 7a3 3 0 0 1-5 2l-2-2H9l-2 2a3 3 0 0 1-5-2l1-7a4 4 0 0 1 4-3Z" />
      <path d="M6 10v5m-2.5-2.5h5M16 11h.01M19 14h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 5 10 8L22 5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-10h.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
    </>
  ),
  toptal: (
    <>
      <path d="m9 2 8 8-4 4-8-8 4-4Zm2 8 8 8-4 4-8-8 4-4Z" fill="currentColor" stroke="none" />
    </>
  ),
  stack: (
    <>
      <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />
    </>
  ),
  forward: <path d="M4 12h16m-7-7 7 7-7 7" />,
  arrow: (
    <>
      <path d="M5 19 19 5M5 5h14v14" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3 0 6-1 6-6a4.7 4.7 0 0 0-1.3-3.3A4.4 4.4 0 0 0 18.5 2S17 2 14 4a13 13 0 0 0-4 0C7 2 5.5 2 5.5 2a4.4 4.4 0 0 0-.2 3.7A4.7 4.7 0 0 0 4 9c0 5 3 6 6 6a3.5 3.5 0 0 0-1 3v4" />
    </>
  ),
  mountain: (
    <>
      <path d="m2 19 7-12 4 7 3-5 6 10H2Z" />
      <path d="m6.7 11 2.3 1 2.3-1" />
    </>
  ),
  back: <path d="M20 12H4m7-7-7 7 7 7" />,
  status: (
    <>
      <path d="M3 12h4l3-7 4 14 3-7h4" />
    </>
  ),
  price: (
    <>
      <path d="M20 13 11 22 2 13V3h10l8 8a1.5 1.5 0 0 1 0 2Z" />
      <circle cx="7" cy="8" r="1" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l12-2v13M9 9l12-2" />
      <ellipse cx="6" cy="18" rx="3" ry="2" />
      <ellipse cx="18" cy="16" rx="3" ry="2" />
    </>
  ),
};

export function Icon({ name = 'arrow', ...props }: SVGProps<SVGSVGElement> & { name?: IconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
