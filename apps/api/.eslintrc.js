module.exports = {
  extends: ['workspace'],
  overrides: [
    {
      files: ['src/**'],
      rules: {
        'turbo/no-undeclared-env-vars': 'off'
      }
    },
    {
      files: ['prisma/**'],
      rules: {
        'no-console': 'off',
        'import/no-default-export': 'off',
        'import/default': 'error'
      }
    }
  ]
}
