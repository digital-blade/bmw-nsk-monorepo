module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'turbo',
    'prettier'
  ],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  ignorePatterns: ['*.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/no-default-export': 'error',
    'import/no-self-import': 'error',
    'import/no-duplicates': 'error',
    'no-console': 'error'
  },
  overrides: [
    {
      files: 'jest.*.ts',
      rules: {
        'import/no-default-export': 'off',
        'import/default': 'error'
      }
    },
    {
      files: '*.config.ts',
      rules: {
        'import/no-default-export': 'off',
        'import/default': 'error'
      }
    }
  ]
}
