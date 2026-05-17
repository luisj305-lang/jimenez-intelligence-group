// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisj305-lang.github.io',
  base: '/jimenez-intelligence-group',
  integrations: [tailwind()],
});
