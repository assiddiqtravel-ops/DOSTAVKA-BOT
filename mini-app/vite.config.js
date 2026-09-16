import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Mini App: 5173-portda ishlaydi.
// /api so'rovlari backend (localhost:5000) ga yo'naltiriladi (proxy).
// Shu sabab ngrok orqali faqat SHU ilovani ochish yetarli.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // tarmoqda ko'rinishi uchun
    allowedHosts: true, // ngrok domenini ruxsat berish
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
