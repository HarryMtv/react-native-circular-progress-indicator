import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJest from "eslint-plugin-jest";
import pluginImport from "eslint-plugin-import";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: [
      "node_modules/",
      "lib/",
      "babel.config.js",
      "eslint.config.js",
      "jest.setup.js",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      jest: pluginJest,
      import: pluginImport,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules,
      ...prettier.rules,
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          bracketSpacing: true,
          parser: "typescript",
          arrowParens: "avoid",
          bracketSameLine: true,
          endOfLine: "lf",
          insertPragma: false,
          jsxSingleQuote: false,
          proseWrap: "preserve",
          quoteProps: "as-needed",
          semi: true,
          trailingComma: "es5",
          useTabs: false,
          tabWidth: 2,
        },
      ],
      quotes: [
        "error",
        "single",
        {
          avoidEscape: true,
        },
      ],
      "max-len": ["error", 95],
      "@typescript-eslint/ban-ts-comment": 2,
      "@typescript-eslint/no-explicit-any": 2,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/consistent-type-imports": 2,
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-extraneous-dependencies": 2,
      "import/extensions": ["error", "never", { svg: "always" }],
      "import/order": ["error", { "newlines-between": "always" }],
      "import/no-duplicates": 2,
      "import/no-useless-path-segments": 2,
      "import/no-cycle": [2, { ignoreExternal: true }],
      "import/prefer-default-export": 0,
      "import/named": 0,
      "import/namespace": 0,
      "import/default": 0,
      "import/no-named-as-default-member": 0,
      "import/no-named-as-default": 0,
      "import/no-unused-modules": 0,
      "import/no-deprecated": 0,
      "@typescript-eslint/indent": 0,
      "import/no-anonymous-default-export": 2,
      "import/no-default-export": 0,
      "react-hooks/rules-of-hooks": 2,
      "react-hooks/exhaustive-deps": [
        "error",
        { additionalHooks: "(useMemoOne)" },
      ],
      "jest/no-identical-title": 2,
      "jest/valid-expect": 2,
      camelcase: 2,
      "prefer-destructuring": 2,
      "no-nested-ternary": 2,
      "comma-dangle": 0,
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-shadow": "off",
      curly: "error",
      semi: ["error", "always"],
      "no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      "no-use-before-define": [
        "error",
        {
          functions: true,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],
    },
  },
];
