/// <reference types="node" />
import { config } from "dotenv";
import { defineConfig } from "tsup";

config();

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "iife"],
  globalName: "PoliticaCookiesBr",
  bundle: true,
  platform: "browser",
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  loader: {
    ".html": "text",
  },
  define: {
    // aqui é necessário usar JSON.stringify.
    __PREFIX__: JSON.stringify(process.env.PREFIX ?? ""),
  },
});
