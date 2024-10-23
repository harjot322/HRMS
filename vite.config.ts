import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Enable this if you're accessing from other devices
    port: 5173,
    strictPort: true, // Exit if the port is already in use
  },
});
