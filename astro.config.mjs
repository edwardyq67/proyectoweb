import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    icon(),
  ],
  output: 'server', // o 'static' si no necesitas SSR
  adapter: cloudflare({
    mode: 'directory',
    runtime: 'off',
  }),
});