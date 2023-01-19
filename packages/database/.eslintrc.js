module.exports = {
  extends: ['workspace'],
  overrides: [
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
