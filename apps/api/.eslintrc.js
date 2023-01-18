module.exports = {
  extends: ['workspace'],
  overrides: [
    {
      files: ['src/**'],
      rules: {
        'turbo/no-undeclared-env-vars': 'off'
      }
    }
  ]
}
