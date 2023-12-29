const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      name: 'straightforward',
      fileName: (format) => `straightforward.${format}.js`
    }
  }
});