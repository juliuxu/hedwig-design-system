/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    // Enforces no extra curly braces around string props or children
    "react/jsx-curly-brace-presence": [
      2,
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Load imports with side-effects first, because duh
          ["^\\u0000"],
          // Other npm imports
          ["^@?\\w"],
          // Relative imports
          ["^~", "^\\."],
        ],
      },
    ],
  },
  ignorePatterns: [
    "build/*",
    "node_modules/*",
    "playwright-report/*",
    "test-results/*",
    ".cache/*",
    ".github/*",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
