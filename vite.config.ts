import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [Vue({ include: [/\.vue$/] })],
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },
})
