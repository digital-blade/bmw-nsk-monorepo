module.exports = {
  extends: ['workspace'],
  overrides: [
    {
      files: ['src/pages/**'],
      rules: {
        'import/no-default-export': 'off',
        'import/default': 'error',
        'import/no-named-export': 'error'
      }
    },
    {
      files: ['vite.config.ts'],
      rules: {
        'turbo/no-undeclared-env-vars': 'off'
      }
    }
  ]
}
