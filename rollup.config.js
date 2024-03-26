import { defineConfig } from "rollup";

export default defineConfig({
  input: "./index.js",
  output: {
    dir: "dist",
    sourcemap: true,
  },
});
