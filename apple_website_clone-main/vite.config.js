import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "venture-garden-group-01",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "venture-garden-group-01",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})