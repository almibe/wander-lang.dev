//import { basename } from "path";
//import fs from 'fs';
import { defineConfig } from 'vite';
import { nailClipperScrewdriver, processContent } from 'nail-clipper-screwdriver';
//import { globSync } from 'glob';

export default defineConfig({
    plugins: [
      nailClipperScrewdriver(createConfig()),
    ],
    build: {
      rollupOptions: {
        input: [],
      },
    },
});

function createConfig() {
  return { layout: 'Main.mustache', data: {}, rootDir: __dirname };
}
