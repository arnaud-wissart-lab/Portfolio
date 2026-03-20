import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const publicUrl = (
    env.VITE_PUBLIC_URL?.trim() || 'https://arnaudwissart.fr'
  ).replace(/\/+$/, '')

  return {
    plugins: [
      react(),
      {
        name: 'html-public-url-fallback',
        transformIndexHtml(html) {
          return html.replaceAll('%VITE_PUBLIC_URL%', publicUrl)
        },
      },
    ],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.ts',
      css: true,
    },
  }
})
