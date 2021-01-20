import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5500',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
