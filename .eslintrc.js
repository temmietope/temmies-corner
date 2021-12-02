module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  rules: {
    camelcase: "off",
    "comma-dangle": ["error", "always-multiline"],
    "max-len": [
      "warn",
      {
        ignoreUrls: true,
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
      },
    ],
  },
}
