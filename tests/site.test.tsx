import { expect, test } from 'bun:test';
import { createMemoryHistory, HeadContent, RouterContextProvider } from '@tanstack/react-router';
import { plugin } from 'bun';
import { renderToStaticMarkup } from 'react-dom/server';
import { projects } from '../src/content/portfolio';
import { siteOrigin, sitePaths } from '../src/content/site';

// Bun does not apply Vite's ?url loader. Only adapt CSS assets; use the actual route tree and metadata merger.
plugin({
  name: 'vite-css-urls',
  setup(build) {
    build.onLoad({ filter: /\.css(?:\?url)?$/ }, ({ path }) => ({
      contents: `export default ${JSON.stringify(path)}`,
      loader: 'js',
    }));
  },
});

const { getRouter } = await import('../src/router');
const pages = [
  {
    path: '/',
    title: 'Darren Labithiotis · CTO & product engineer',
    description:
      'Darren Labithiotis, CTO at Hablo and product engineer based in Austria. Figma tools, web and mobile applications, and independent products.',
  },
  {
    path: '/history',
    title: 'Work history · Darren Labithiotis',
    description:
      'Darren Labithiotis’s work history in games, product engineering, design tools, and technical leadership.',
  },
  ...projects.map((project) => ({
    path: `/work/${project.slug}`,
    title: `${project.name} · Darren Labithiotis`,
    description: project.description,
  })),
];

test.each(pages)('$path has matching document and social identity', async ({ path, title, description }) => {
  const router = getRouter();
  router.update({ history: createMemoryHistory({ initialEntries: [path] }) });
  await router.load();
  const head = renderToStaticMarkup(
    <RouterContextProvider router={router}>
      <HeadContent />
    </RouterContextProvider>,
  );
  expect(head).toContain(renderToStaticMarkup(<title>{title}</title>));
  expect(head).toContain(renderToStaticMarkup(<meta name="description" content={description} />));
  expect(head).toContain(renderToStaticMarkup(<meta property="og:title" content={title} />));
  expect(head).toContain(renderToStaticMarkup(<meta property="og:description" content={description} />));
  expect(head).toContain(renderToStaticMarkup(<meta property="og:url" content={new URL(path, siteOrigin).href} />));
  expect(head.match(/property="og:url"/g)).toHaveLength(1);
  expect(head.match(/property="og:title"/g)).toHaveLength(1);
  expect(head).toContain('property="og:image"');
});

test.each(['/missing', '/work/missing'])(
  '%s has a fallback title without homepage or project identity',
  async (path) => {
    const router = getRouter();
    router.update({ history: createMemoryHistory({ initialEntries: [path] }) });
    await router.load();
    const head = renderToStaticMarkup(
      <RouterContextProvider router={router}>
        <HeadContent />
      </RouterContextProvider>,
    );
    expect(head).toContain('<title>Darren Labithiotis</title>');
    expect(head.match(/<title>/g)).toHaveLength(1);
    expect(head).not.toContain('property="og:title"');
    expect(head).not.toContain('property="og:description"');
    expect(head).not.toContain('property="og:url"');
  },
);

test('sitemap lists every project plus home and history exactly once', async () => {
  const paths = sitePaths();
  expect(paths).toEqual(['/', '/history', ...projects.map((project) => `/work/${project.slug}`)]);
  expect(new Set(paths).size).toBe(paths.length);
  expect(await Bun.file(new URL('../public/robots.txt', import.meta.url)).text()).toContain(
    `Sitemap: ${siteOrigin}/sitemap.xml`,
  );
});
