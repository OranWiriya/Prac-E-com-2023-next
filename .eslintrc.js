module.exports = {
  extends: ['next', 'airbnb', 'airbnb-typescript', 'prettier', 'plugin:import/recommended', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/function-component-definition': [
      2,
      {
        nameComponent: ['arrow-function', 'function-declaration'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off', // Since we do not use prop-types
    'react/require-default-props': 'off', // Since we do not use prop-types
    'react/no-unused-prop-types': 'off', // Since we do not use prop-types

    //import
    'import/no-extraneous-dependencies': 'off',
  },
  ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', 'public', 'styles', '.next', 'coverage', 'dist'],
};
