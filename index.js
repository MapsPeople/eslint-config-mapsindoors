module.exports = {
    extends: 'eslint:recommended',
    plugins: [
        "jsdoc"
    ],
    rules: {
        "no-console": 1, // disallow the use of console
        "no-alert": 1, // disallow the use of alert, confirm, and prompt
        "no-var": 2, // require let or const instead of var
        "prefer-const": 1, // require const declarations for variables that are never reassigned after declared
        "space-in-parens": [1, "never"], // enforce consistent spacing inside parentheses
        "quotes": [1, "single"],
        "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
        "no-irregular-whitespace": 2, // disallow irregular whitespace
        "eqeqeq": 2, // require the use of === and !==
        "require-await": 1, // disallow async functions which have no await expression
        "semi": ["error", "always"], // require or disallow semicolons instead of ASI
        "semi-spacing": 2, // enforce consistent spacing before and after semicolons
        "key-spacing": 1, // enforce consistent spacing between keys and values in object literal properties
        "space-before-blocks": 1, // enforce consistent spacing before blocks
        'keyword-spacing': 1,
        'no-unused-vars': 1,

        "jsdoc/check-alignment": 1,
        "jsdoc/check-indentation": 1,
        "jsdoc/check-param-names": 1,
        "jsdoc/check-property-names": 1,
        "jsdoc/check-tag-names": 1,
        "jsdoc/check-types": 1,
        "jsdoc/empty-tags": 1,
        "jsdoc/implements-on-classes": 1,
        "jsdoc/multiline-blocks": 1,
        "jsdoc/newline-after-description": 1,
        "jsdoc/no-multi-asterisks": 1,
        "jsdoc/no-undefined-types": 1,
        "jsdoc/require-asterisk-prefix": 1,
        "jsdoc/require-description": 1,
        "jsdoc/require-description-complete-sentence": 1,
        'jsdoc/require-hyphen-before-param-description': 1,
        "jsdoc/require-jsdoc": [1, {
            "require": { "MethodDefinition": true },
            "checkConstructors": false,
            "enableFixer": false
        }],
        "jsdoc/require-param-name": 1,
        "jsdoc/require-param-type": 1,
        "jsdoc/require-returns": 1,
        "jsdoc/require-returns-check": 1,
        "jsdoc/require-returns-type": 1,
        "jsdoc/tag-lines": 1,
        "jsdoc/valid-types": 1,
    }
};
