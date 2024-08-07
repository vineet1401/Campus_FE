module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    "no-unused-vars": "warn", // Warn about unused variables, including imports
    "import/no-unused-modules": [1, { unusedExports: true }], // Warn about unused imports
    "react/react-in-jsx-scope": "off", // Disable the rule for React 17+
    "react/prop-types": "off", // Turn off prop-types validation
    "react/jsx-no-target-blank": "off",
    "react/no-unescaped-entities": "off",
    "import/no-unresolved": "off",
    " no-empty-pattern": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
