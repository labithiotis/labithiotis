# Darren Labithiotis's portfolio

A personal portfolio built with TanStack Start, React, Tailwind CSS, and Vite, deployed to a Cloudflare Worker.
Use Bun for package management.

ALWAYS USE `./docs/WHITTLE.md`.

Run `bun checks` before code change handoffs.
Treat validated env var types as accurate. Do not add null checks for required strings.
New dependencies use the latest compatible release; pin exact versions.
Use Conventional Commits for commit messages. Keep the subject under ~70 chars; add a body only when the why matters.
Use a 120 print width for code and documentation, unless the existing formatter configuration requires otherwise.
Use MCPProxy for MCP connections when it is available. Use T3 Code (`t3-code`) MCP tools directly, bypassing MCPProxy.
Use Git worktrees for isolated work; never clone a repo unless the user explicitly directs you to.
Reuse dev servers; stop only those you started this session by recorded PID; never `pkill`/`killall` or name/port kills.

## Routing

Load the smallest relevant doc set for the task:

- Open `./docs/PULL_REQUEST.md` when creating or reviewing PRs.
- Open `./docs/TYPESCRIPT.md` when editing TypeScript or JavaScript files.
- Open `./docs/TESTING.md` when editing tests, mocks, or test infrastructure.
- Open `./docs/GH_WORKFLOW.md` when editing `.github/workflows/*`.
- Read `./docs/work-history.md` when changing career claims or project descriptions.

## Naming

- `camelCase` for directories, files, and the default fallback.
- `PascalCase` for React components and class constructor files.
- `UPPER_SNAKE_CASE` for markdown files.
- Preserve framework-required filenames, including TanStack route filenames.
- Branch names use optional user initials, a ticket ID when available, and a short 3-4 word description.
  Never use AI model or framework names in branch names.

## Comments

- Do not add comments by default.
- Only explain non-obvious rules or constraints that code and types cannot make clear.
- Never narrate or restate the code. Keep necessary comments brief. When unsure, omit them.
- Remove outdated comments as part of the change you are making.
- PR/commit narration belongs in the PR body, not the source.

## Portfolio rules

`bun checks` includes React Doctor. Biome enforces cognitive complexity ≤15, functions ≤75 nonblank lines
(except tests), and no `void` operator. Reduce complexity with meaningful boundaries; never split code just to pass a limit.

Keep public career claims grounded in the documented evidence.
Keep private repository details and research artifacts in the ignored `.local/` and `.impeccable/` folders.
Preserve accessibility, keyboard focus, responsive layouts, and reduced-motion behaviour.
Keep `/app-privacy-policy.html` and `/app-terms-and-conditions.html` working for legacy apps.
Keep source and license records beside shipping images and fonts.
Treat `src/routeTree.gen.ts` as generated code; let TanStack regenerate it.
