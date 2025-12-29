import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel'; // Necesitas adapter

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static', // Cambiar a server
  adapter: netlify(), // Necesitas adapter para SSR
  site: 'https://tudominio.com',
});