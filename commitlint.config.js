module.exports = {
  extends: ['@commitlint/config-conventional'],
  'type-enum': [
    2,
    'always',
    ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'chore'],
  ],
  'scope-enum': [2, 'always', ['router', 'auth']],
}
