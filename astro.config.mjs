// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://iam-jimmy.github.io',
  base: '/blog',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
