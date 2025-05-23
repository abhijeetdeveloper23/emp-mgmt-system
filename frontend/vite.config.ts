import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/", // Add this line
  server: {
    proxy: {
      "/graphql": {
        target: "https://test-task-en6w.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
