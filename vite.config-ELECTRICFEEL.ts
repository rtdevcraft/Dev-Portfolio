import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
      output: {
        manualChunks: {},
      },
    },
  },
  esbuild: {
    loader: 'ts',
  },
  assetsInclude: ['**/*.png', '**/*.webp', '**/*.jpg'],
});
