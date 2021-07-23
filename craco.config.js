const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@images': path.resolve(__dirname, "src/assets/images/"),
      '@pages': path.resolve(__dirname, "src/pages/")
    }
  }
}