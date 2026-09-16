import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Admin Panel: 5174-portda ishlaydi.
// /api so'rovlari backend (localhost:5000) ga yo'naltiriladi.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
