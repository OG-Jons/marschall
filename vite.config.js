import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";

import path from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".json", ".vue"],
  },
});
