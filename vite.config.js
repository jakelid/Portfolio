import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.REPO_NAME || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repo ? `/${repo}/` : '/',
})
