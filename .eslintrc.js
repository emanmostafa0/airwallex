module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
    "cypress/globals": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:cypress/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "strict": 0,
    "max-len": [2, 120, 2],
    "indent": ["error", 2],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "never",
      },
    ],
    "no-console": 2,
    "react/react-in-jsx-scope": 0,
    "no-nested-ternary": 2,
    "react/prop-types": 2,
    "import/no-extraneous-dependencies": 0,
    "react/require-default-props": 0,
    "react/default-props-match-prop-types": 2,
    "no-unused-vars": 2,
    "semi": ["error", "always"],
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/no-static-element-interactions": 2,
    "jsx-a11y/label-has-for": [
      2,
      {
        components: ["Label"],
        required: {
          every: ["nesting", "id"],
        },
        allowChildren: false,
      },
    ],
  }
};