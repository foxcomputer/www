import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),      // from your template
    tailwindcss(), // added from shadcn guide
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // alias from guide
    }
  }
})
