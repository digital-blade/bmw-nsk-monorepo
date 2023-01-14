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
    }
  ]
}
