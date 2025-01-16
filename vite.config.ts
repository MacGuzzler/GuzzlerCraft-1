import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Replace `username/repo-name` with your GitHub repository's name
export default defineConfig({
  plugins: [vue()],
  base: '/GuzzlerCraft-1/',
  build: {
    outDir: './dist',
  },
});
