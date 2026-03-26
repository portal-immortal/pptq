import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://pptqnuruliman.ponpes.id',
  base: '/',
  output: 'static',
});