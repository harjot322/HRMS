import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './frontend',
  plugins: [react()],
  server: {
    host: true,  // Enable this if you're accessing from other devices
    port: 5173,
    strictPort: true, // Exit if the port is already in use
  },
  build: {
    outDir: 'dist', // Specify the output directory for builds
    emptyOutDir: true, // Clean the output directory before each build
    rollupOptions: {
      input: {
        main: 'src/main.tsx', // Entry point for your application
        // You can add other entry points if needed
      },
    },
  },
});
