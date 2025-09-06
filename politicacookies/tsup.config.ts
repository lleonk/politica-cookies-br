/// <reference types="node" />
import { config } from "dotenv";
import { defineConfig } from "tsup";

config();

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "iife"],
  globalName: "PoliticaCookiesBr",
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
  banner: {
    js: `
      if (window.__PoliticaCookiesBrLoaded) {
        console.warn("PoliticaCookiesBr já foi carregado, ignorando...");
      }
      window.__PoliticaCookiesBrLoaded = true;
    `,
  },
});
