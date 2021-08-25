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
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@schemas": path.resolve(__dirname, "src/schemas/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@theme": path.resolve(__dirname, "src/theme/"),
    },
  },
};
