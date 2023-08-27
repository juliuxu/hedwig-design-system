/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require("postcss-import")(), require("postcss-nesting")()],
};

module.exports = config;
