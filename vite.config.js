import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import ViteWebp from 'vite-plugin-webp-generator'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // ViteWebp.default({
    //   extensions: ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"]
    // }),
    ViteImageOptimizer({
      // Optimize and convert images to WebP
      webp: {
        quality: 80,
      },
      // Also optimize PNG
      png: {
        quality: 80,
      },
      // Also optimize JPEG
      jpeg: {
        quality: 80,
      },
      // Also optimize JPG
      jpg: {
        quality: 80,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'three-vendor': ['three', 'ogl'],
          'ui-vendor': ['lucide-react', 'react-icons'],
        },
      },
    },
  },
});
