module.exports = {
    extends: 'eslint:recommended',
    rules: {
        "no-console": 1,
        "no-alert": 1,
        "no-var": 2,
        "prefer-const": 1,
        "space-in-parens": [1, "never"],
        "quotes": [1, "single"],
        "no-trailing-spaces": 1,
        "no-irregular-whitespace": 2,
        "eqeqeq": 2,
        "require-await": 1,
        "semi": ["error", "always"],
        "semi-spacing": 2,
        "key-spacing": 1,
        "space-before-blocks": 1,
        'keyword-spacing': 1,
        'no-unused-vars': 1,
        'indent': ["error", 4, { "SwitchCase": 1 }],
        'brace-style': ["error", "1tbs", { "allowSingleLine": true }]
    }
};
