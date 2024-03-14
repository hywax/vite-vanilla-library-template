import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    ignores: [
      '.github',
      'dist',
      'node_modules',
    ],
  },
  {
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'style/arrow-parens': ['error', 'always'],
      'curly': ['error', 'all'],
      'antfu/consistent-list-newline': 'off',
    },
  },
  {
    files: ['package.json'],
    rules: {
      'style/eol-last': 'off',
    },
  },
)
