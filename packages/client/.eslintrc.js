module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['airbnb', 'plugin:import/typescript'],
    env: {
        browser: true,
        es6: true,
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
    rules: {
        'no-new': 'off',
        'react/require-default-props': 'off',
        indent: 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'import/no-extraneous-dependencies': 'off',
        'object-curly-newline': 'off',
        'react/jsx-closing-bracket-location': 'off',
        camelcase: 'off',
        'comma-dangle': 'off',
        'no-unused-expressions': 'off',
        'no-async-promise-executor': 'off',
        'no-confusing-arrow': 'off',
        'dot-notation': 'off',
        'function-paren-newline': 'off',
        'operator-linebreak': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-param-reassign': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-wrap-multilines': 'off',
        'import/no-cycle': 'off',
        'react/no-invalid-html-attribute': 'off',
        'react/no-unused-class-component-methods': 'off',
        'react/no-arrow-function-lifecycle': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-undef': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        ],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        // "@typescript-eslint/no-unsafe-return": "off",
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: true,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'no-duplicate-imports': 2,
        'jsx-a11y/href-no-hash': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'multiline-ternary': 0,
        'no-unused-vars': 'off',
        'no-shadow': 0,
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'react/prop-types': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'max-len': [
            'warn',
            {
                code: 120,
                tabWidth: 4,
                comments: 120,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['error'],
            },
        },
    ],
};
