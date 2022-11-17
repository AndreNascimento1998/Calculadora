module.exports = {
    root: true,

    env: {
        node: true,
        browser: true,
    },

    extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/eslint-config-prettier'],

    parserOptions: {
        ecmaVersion: 2020,
    },

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignorePattern: '^import.+|(class|style)=".+"',
                ignoreUrls: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'vue/no-side-effects-in-computed-properties': 'off',
        'no-global-assign': 'off',
        'no-extra-semi': 'off',
        'no-empty-interface': 'off',
        'no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions', 'constructors', 'methods'],
            },
        ],

        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: ['ESLintLiteral', 'VAttribute'],
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                },
            },
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/valid-v-slot': 'off',
    },
};
