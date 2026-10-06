# Testing

## Shared rules

- Prefer behaviour tests through public interfaces.
- Mock system boundaries rather than your own modules, unless the seam is external or non-deterministic. Do not mock the
  module under test.
- Keep unit and integration tests off the real network, except for explicitly documented local infrastructure.
- Preserve meaningful assertions. Fix the implementation or mocks instead of weakening tests to make them pass.
- When the repository has `.agents/skills/test-summary/SKILL.md`, use it for test behaviour summaries.

## Picking a seam

- Use unit tests for pure logic.
- Use integration tests for request, data, and persistence flows.
- Use E2E for critical UI journeys that cannot be proven lower in the stack.

## Project tooling and conventions

Use Bun test. Tests live in `tests/` and cover portfolio data, external links, route metadata, and the sitemap.
Use the existing static React rendering seams for link and document-head behaviour.
Follow the asset loader in `tests/site.test.tsx` when testing Vite CSS URL imports in Bun.
Keep router metadata and sitemap behaviour connected to the real route and content definitions.
