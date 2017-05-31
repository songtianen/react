module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": 0,
        "linebreak-style": 0,
        "quotes": 0,
        "no-extra-semi": 0,
        "no-unused-expressions": 0,
        "no-unused-vars": 0,
        "no-console": 0,
        "no-mixed-spaces-and-tabs": 0,
        "no-cond-assign": 0
    }
}
