import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  const config: UserConfig = {
    server: {
      port: 5000,
    },
    plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
    css: {
      modules: {
        // reference: https://github.com/webpack/loader-utils#interpolatename
        generateScopedName: "[folder]__[local]--[hash:base64:5]",
        localsConvention: "camelCaseOnly",
      },
    },
  };
  return config;
});
