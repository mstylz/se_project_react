import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier"; // ⬅️ add this

export default [
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // your existing custom rules
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/prop-types": "off",

      // turn off common formatting rules - Prettier will handle formatting
      "max-len": "off",
      "object-curly-newline": "off",
      "array-bracket-newline": "off",
      "array-element-newline": "off",
      "function-paren-newline": "off",
    },
    overrides: [
      {
        files: ["*.js", "*.jsx"],
      },
    ],
  },

  // ⬇️ MUST be last: disables any ESLint rules that would conflict with Prettier
  eslintConfigPrettier,
];
