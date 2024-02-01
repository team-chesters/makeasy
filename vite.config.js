import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './makeasy.default.js'),
      name: 'makeasy',
      fileName: (format) => `makeasy.${format}.js`
    }
  },
  output: {
    exports: "named"
  }
});