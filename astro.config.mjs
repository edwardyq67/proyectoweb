import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import node from '@astrojs/node'; // Agregar esto

export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  adapter: node({
    mode: 'standalone' // Para static generation
  })
});