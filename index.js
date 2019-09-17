module.exports = {
    extends: 'eslint:recommended',
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
    }
};
