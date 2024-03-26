import { defineConfig } from "rollup";
import { externalAssets } from "rollup-plugin-external-assets";

export default [
  defineConfig({
    input: "./without-assets.js",
    output: {
      dir: "dist",
      sourcemap: true,
    },
  }),
  defineConfig({
    input: "./with-assets.js",
    output: {
      dir: "dist",
      sourcemap: true,
    },
    plugins: [externalAssets({ include: ["**/*.png"] })],
  }),
];
