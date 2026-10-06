import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { siteOrigin, sitePaths } from './src/content/site';

export default defineConfig({
  server: { allowedHosts: ['otis.deer-rigel.ts.net'] },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    tanstackStart({ pages: sitePaths().map((path) => ({ path })), sitemap: { host: siteOrigin } }),
    react(),
  ],
});
