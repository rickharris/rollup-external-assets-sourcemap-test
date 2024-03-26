import { defineConfig } from "rollup";
import { externalAssets } from "rollup-plugin-external-assets";

export default defineConfig({
  input: "./index.js",
  output: {
    dir: "dist",
    sourcemap: true,
  },
  plugins: [externalAssets({ include: ["**/*.png"] })],
});
