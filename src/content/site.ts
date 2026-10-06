import { profile, projects } from './portfolio';

export const siteOrigin = 'https://labithiotis.com';

export function pageHead({ title, description, path }: { title?: string; description: string; path: string }) {
  const pageTitle = title ? `${title} · ${profile.name}` : `${profile.name} · CTO & product engineer`;
  return {
    meta: [
      { title: pageTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: new URL(path, siteOrigin).href },
    ],
  };
}

export function sitePaths() {
  return ['/', '/history', ...projects.map((project) => `/work/${project.slug}`)];
}
