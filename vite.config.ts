import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.startsWith('card-') || tag.startsWith('title-'),
        },
        transformAssetUrls: {},
      },
    }),
  ],
});
