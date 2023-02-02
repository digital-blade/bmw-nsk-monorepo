const baseSubjects = require('@commitlint/config-conventional').rules['type-enum'][2]

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...baseSubjects, 'draft']]
  }
}
