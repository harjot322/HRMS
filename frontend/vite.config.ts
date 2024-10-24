import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable this if you're accessing from other devices
    port: 5173,
    strictPort: true, // Exit if the port is already in use
  },
  build: {
    outDir: 'dist', // Specify the output directory for builds
    emptyOutDir: true, // Clean the output directory before each build
  },
  resolve: {
    alias: {
      // Add any aliases if needed, e.g. '@': path.resolve(__dirname, 'src')
    },
  },
});

// Debugging output
console.log('Vite Config:', config);

export default config;
