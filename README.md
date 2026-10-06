# Darren Labithiotis's portfolio

TanStack Start, React, Tailwind CSS, and Vite. Server-rendered on a Cloudflare Worker.

Use Bun 1.4.2+ and Node.js 22.13+.

```sh
bun install
bun dev          # http://localhost:3000, also accessible on the network
bun checks       # lint, React Doctor, types, and tests
bun run build
```

`bun install` sets up Lefthook's Git hooks. TanStack Start generates the sitemap during the build.

With Cloudflare credentials configured, `bun run deploy:preview` deploys the preview Worker and
`bun run deploy` deploys production.
