import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
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
