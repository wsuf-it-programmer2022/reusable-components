module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 'error',
    '@typescript-eslint/no-empty-function': 0
  },
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 2022,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier'
      ],
      rules: {
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'prettier/prettier': 'error',
        '@typescript-eslint/no-empty-function': 0
      },
      plugins: ['react', 'import', 'jsx-a11y', 'prettier', '@typescript-eslint'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true
          }
        }
      }
    }
  ]
};
