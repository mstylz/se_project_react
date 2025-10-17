// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier"; // keep last later

export default [
  // Ignore build artifacts
  { ignores: ["dist", "node_modules"] },

  // Base JS rules
  js.configs.recommended,

  // React plugin recommended (flat-config style is available in recent versions; if not, keep your current spreads)
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React recommended
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // Your custom rules
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/prop-types": "off",

      // Turn off formatting-related rules (Prettier owns formatting)
      "max-len": "off",
      "object-curly-newline": "off",
      "array-bracket-newline": "off",
      "array-element-newline": "off",
      "function-paren-newline": "off",
    },
  },

  // MUST be last: disables rules that conflict with Prettier
  eslintConfigPrettier,
];
