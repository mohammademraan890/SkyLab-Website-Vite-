import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    cssCodeSplit: false,
  },
  css: {
    devSourcemap: true,
  },
  server: {
    historyFallback: true,
  },
  define: {
    "process.env": {},
  },
 
});
