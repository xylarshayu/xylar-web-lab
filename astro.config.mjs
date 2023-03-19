import { defineConfig } from 'astro/config';
import { FontaineTransform } from 'fontaine'

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Arial'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url), // id is the font src value in the CSS
      }),
    ],
  },
});
