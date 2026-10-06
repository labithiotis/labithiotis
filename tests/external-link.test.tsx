import { expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { ExternalLink } from '../src/components/ExternalLink';

test('text links carry safe navigation attributes and a hidden new-tab notice', () => {
  const html = renderToStaticMarkup(
    <ExternalLink href="https://github.com/labithiotis" className="text-link" title="Profile">
      GitHub
    </ExternalLink>,
  );
  expect(html).toContain('href="https://github.com/labithiotis"');
  expect(html).toContain('target="_blank"');
  expect(html).toContain('rel="noopener noreferrer"');
  expect(html).toContain('class="text-link"');
  expect(html).toContain('title="Profile"');
  expect(html).toContain('<span class="sr-only"> opens in a new tab</span>');
});

test('icon-only links put the notice in the accessible label exactly once', () => {
  const html = renderToStaticMarkup(
    <ExternalLink href="https://github.com/labithiotis" aria-label="Darren on GitHub">
      <svg aria-hidden="true" />
    </ExternalLink>,
  );
  expect(html).toContain('aria-label="Darren on GitHub, opens in a new tab"');
  expect(html).toContain('target="_blank"');
  expect(html).toContain('rel="noopener noreferrer"');
  expect(html.match(/opens in a new tab/g)).toHaveLength(1);
  expect(html).not.toContain('class="sr-only"');
});
