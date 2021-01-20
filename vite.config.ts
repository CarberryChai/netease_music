import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [vue(), vueJsx()],
  alias: [
    { find: /^@\/(.*)$/, replacement: path.resolve(__dirname, 'src/$1') },
  ],
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5500',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
