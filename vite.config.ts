import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/api-sv': {
        target: 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1',
        changeOrigin: true,
        secure: false, 
        bypass: (req, res) => { console.log(req, res)},
        rewrite: (path) => path.replace(/^\/api-sv/, ''),
      },
    },
  },
})
