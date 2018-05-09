module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": 0,
        "comma-dangle": [1, "never" ],
        "react/require-default-props": [0, { forbidDefaultForRequired: false }],
        "global-require": 0,
        "react/forbid-prop-types": [
            "error",
            {
              "forbid": [
                "any",
                "array"
              ]
            }
        ],
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "import/prefer-default-export": 0
    }
};