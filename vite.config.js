
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const pages = [
  'index',
  'about',
  'skills',
  'services',
  'projects',
  'testimonials',
  'blog',
  'contact',
]

export default defineConfig({
  plugins: [tailwindcss()],

  root: '.',

  build: {
    outDir: 'dist',

    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [`${page}`, `${page}.html`])
      ),
    },
  },

  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
})
