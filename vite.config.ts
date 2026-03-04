import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/song-hoa-wedding/', // 🔴 RẤT QUAN TRỌNG
  plugins: [react(), tailwindcss()],
});
