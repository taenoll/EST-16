/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite';

const env = process.env.NODE_ENV;

export default defineConfig({
  build: {
    outDir: 'docs'
  },
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },
  css: {
    modules: {
      generateScopedName:
        env === 'development' ? "css__[local]__[hash:base64:5]" : "[hash:base64:3]"
    }
  },
  resolve:{
    alias: { "@": resolve(import.meta.dirname, "src") },
  }
});