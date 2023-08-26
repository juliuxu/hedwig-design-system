module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-hedwig-julian`
  extends: ["hedwig-julian"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
