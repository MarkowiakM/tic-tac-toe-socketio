import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { ValidateEnv } from "@julr/vite-plugin-validate-env";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), ValidateEnv()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
