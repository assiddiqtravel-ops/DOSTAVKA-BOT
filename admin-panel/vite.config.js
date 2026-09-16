import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Admin Panel.
// - Development: 5174-portда, '/' da ishlaydi, /api → localhost:5000 proxy.
// - Production (build): '/admin/' yo'lida, backend shu serverда beradi.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/admin/' : '/',
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
}));
