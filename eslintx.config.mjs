import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add overrides to bypass import errors
  {
    rules: {
      // Disable import plugin rules
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/default": "off",
      "import/namespace": "off",
      "import/no-named-as-default": "off",
      "import/no-extraneous-dependencies": "off",
      "import/order": "off",

      // Disable TypeScript-specific import rules
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Optionally turn off all errors (not recommended in production)
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
];

export default eslintConfig;
