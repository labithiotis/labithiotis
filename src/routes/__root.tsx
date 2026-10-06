import { createRootRoute, HeadContent, Link, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { ExternalLink } from '../components/ExternalLink';
import { Icon } from '../components/Icon';
import { LakeBackdrop } from '../components/LakeBackdrop';
import { profile } from '../content/portfolio';
import profileStylesheet from '../profile.css?url';
import stylesheet from '../styles.css?url';

const entranceBootstrap = `(() => {
  if (location.pathname !== '/' || matchMedia('(prefers-reduced-motion: reduce)').matches || !('animate' in Element.prototype)) return;
  const root = document.documentElement;
  root.setAttribute('data-page-entrance', 'pending');
  const onFocus = () => {
    if (root.getAttribute('data-page-entrance') === 'pending') root.setAttribute('data-page-entrance', 'expired');
  };
  document.addEventListener('focusin', onFocus, { once: true, capture: true });
  setTimeout(() => {
    document.removeEventListener('focusin', onFocus, true);
    if (root.getAttribute('data-page-entrance') === 'pending') root.setAttribute('data-page-entrance', 'expired');
  }, 4000);
})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: profile.name },
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#101915' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://labithiotis.com/social-card-v2.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: import.meta.env.DEV ? `${stylesheet}?direct` : stylesheet },
      { rel: 'stylesheet', href: import.meta.env.DEV ? `${profileStylesheet}?direct` : profileStylesheet },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  component: Outlet,
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div className="page-intro container">
      <h1>Page not found.</h1>
      <Link to="/" className="button button-primary">
        Back to the portfolio <Icon name="back" />
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="page-intro container">
      <h1>Unable to load this page.</h1>
      <p>Try loading the page again, or get in touch by email.</p>
      <button type="button" onClick={reset} className="button button-primary">
        Try again
      </button>
      <a className="text-link ml-6" href={`mailto:${profile.email}`}>
        Email Darren
      </a>
    </div>
  ),
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script>{entranceBootstrap}</script>
      </head>
      <body>
        <LakeBackdrop />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <header className="site-header container">
          <Link to="/" className="wordmark" aria-label="Darren Labithiotis, home">
            <span className="wordmark-symbol">
              dl<span>.</span>
            </span>
            <span className="wordmark-name">Darren Labithiotis</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link to="/" hash="work" className="nav-link">
              Work
            </Link>
            <Link to="/" hash="projects" className="nav-link">
              Projects
            </Link>
            <Link to="/" hash="about" className="nav-link">
              About
            </Link>
            <Link to="/history" className="nav-link nav-history">
              History
            </Link>
            <Link to="/" hash="contact" className="nav-contact">
              Contact <Icon width="16" height="16" />
            </Link>
          </nav>
        </header>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer container">
          <span>© {new Date().getFullYear()} Darren Labithiotis</span>
          <div className="flex gap-5">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}
