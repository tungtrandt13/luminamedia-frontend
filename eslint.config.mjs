import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Workaround: @next/next/no-html-link-for-pages crashes on some setups with an invalid RegExp.
  // We rely on App Router and standard Link usage elsewhere, so disabling is safe here.
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      // Repo currently uses `any` heavily (Strapi responses, media helpers). Keep lint usable.
      "@typescript-eslint/no-explicit-any": "off",
      // Common patterns in this codebase (mounted guards, close-on-route-change) trip this rule.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
