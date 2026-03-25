import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://portal-immortal.github.io',
  base: '/pptq',
  output: 'static',
});
