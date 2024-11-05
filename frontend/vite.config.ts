import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // Root is the main directory now
  plugins: [react()],
  server: {
    host: true,
    port: 5179, // or the port of your choice
    strictPort: true,
  },
  build: {
    outDir: 'dist', // Specify the output directory for builds
    emptyOutDir: true, // Clean the output directory before each build
  },
  resolve: {
    alias: {
      '@': '/frontend/src', // Set alias to frontend/src for easier imports
    },
  },
});
