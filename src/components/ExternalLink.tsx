import type { AnchorHTMLAttributes } from 'react';

export function ExternalLink({
  children,
  href,
  'aria-label': label,
  ...props
}: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> & { href: string }) {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label}, opens in a new tab` : undefined}
    >
      {children}
      {!label && <span className="sr-only"> opens in a new tab</span>}
    </a>
  );
}
