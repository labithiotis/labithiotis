import { expect, test } from 'bun:test';
import { career, featuredProjects, findProject, nextProject, projects } from '../src/content/portfolio';

test('featured ordering and career relationships resolve through stable slugs', () => {
  expect(featuredProjects.map((project) => project.slug)).toEqual(['hablo', 'divriots', 'triptease']);
  expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length);
  for (const chapter of career) {
    if (chapter.projectSlug) expect(findProject(chapter.projectSlug)).toBeDefined();
  }
  const renamedCompany = { ...career[0], company: 'A changed display name' };
  expect(renamedCompany.projectSlug && findProject(renamedCompany.projectSlug)?.slug).toBe('hablo');
});

test('unknown project slugs do not resolve', () => {
  expect(findProject('missing-project')).toBeUndefined();
});

test('next-project navigation preserves ordering and wraps', () => {
  for (const [index, project] of projects.entries()) {
    expect(nextProject(project.slug)).toBe(projects[(index + 1) % projects.length]);
  }
});

test('Kernel owns its existing destination label', () => {
  expect(findProject('kernel')?.linkLabel).toBe('Read the original profile');
});
