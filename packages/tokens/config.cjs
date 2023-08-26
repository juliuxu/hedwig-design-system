module.exports = {
  source: ["tokens.json"],
  platforms: {
    css: {
      prefix: "hds",
      transformGroup: "css",
      files: [
        {
          format: "css/variables",
          destination: "dist/variables.css",
        },
      ],
    },
  },
};
