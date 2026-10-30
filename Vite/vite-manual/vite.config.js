/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'

export default defineConfig({
  build:{
    outDir:'docs'
  },
  sever:{
    host: 'localhost',
    port: 3000,
    cors: true,
  },

})