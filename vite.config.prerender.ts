import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve("client"), "@shared": path.resolve("shared") },
  },
  build: {
    ssr: "client/entry-server.tsx",
    outDir: "dist/prerender",
    target: "node22",
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  },
});
