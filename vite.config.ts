import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Do not isolate React in its own chunk: it caused a circular import with the main vendor chunk
        // and undefined React at lucide-react init (forwardRef).
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("@splinetool") || id.includes("splinetool")) return "spline";
          if (id.includes("framer-motion")) return "framer";
          return "vendor";
        },
      },
    },
  },
}));
