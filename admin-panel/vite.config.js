import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Admin Panel (Vercel'да alohida loyiha, root '/').
// Local: 5174-portда, /api → localhost:5000 proxy (dev qulayligi uchun).
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
