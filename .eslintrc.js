module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      'plugin:mdx/recommended', // ESLint Parser/Plugin for MDX
    ],
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    settings: {
      react: {
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      '@typescript-eslint/consistent-type-assertions': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      '@typescript-eslint/camelcase': 'off' // because of snake_cased variables from backend
    },
    overrides: [
      {
        /**
         * Disable @ts-ignore warnings for test files
         */
        files: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
        rules: {
          '@typescript-eslint/ban-ts-ignore': 'off',
        },
      },
      // {
      //   /**
      //    * Disable mdx/no-unused-expressions for .tsx files
      //    * (buggy when using "?" safe optional operator)
      //    */
      //   files: ['src/**/*.ts', 'src/**/*.tsx'],
      //   rules: {
      //     'mdx/no-unused-expressions': 'off',
      //   },
      // },
      {
        /**
         * If you're using eslint >=6.0.0 and <6.4.0, add as following because it does not support overrides from npm pkg:
         */
        "files": ["*.md"],
        "rules": {
          "prettier/prettier": [
            2,
            {
              // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
              "parser": "markdown"
            }
          ]
        }
      },
      {
        "files": ["*.mdx"],
        "extends": ["plugin:mdx/overrides"],
        "rules": {
          "@typescript-eslint/explicit-function-return-type": 'off',
        }
      }
    ],
  };
  