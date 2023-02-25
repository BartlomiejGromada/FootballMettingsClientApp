const OFF = 0;
const WARN = 1;
const ERROR = 2;

// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/jsx-uses-react": OFF,
    "react/react-in-jsx-scope": OFF,
    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARN,
  },
};
