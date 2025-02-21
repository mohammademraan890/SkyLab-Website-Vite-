import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enables JS source maps
    cssCodeSplit: false, // Prevents splitting of CSS into multiple files (optional)
  },
  css: {
    devSourcemap: true, // ✅ Enable CSS source maps in development
  },
});
