const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@lib": path.resolve(__dirname, "src/lib/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@services": path.resolve(__dirname, "src/services/"),
    },
  },
};
