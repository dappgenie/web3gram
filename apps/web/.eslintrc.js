module.exports = {
    root: true,
    env: {
        node: true,
        // "vue/setup-compiler-macros": true
    },
    extends: [
        //'plugin:vue/vue3-essential',
        // 'eslint:recommended',
        // '@vue/typescript/recommended',
        // 'plugin:prettier/recommended',
    ],
    rules: {
        // semi: ["error", "never"],
        // quotes: ["error", "single"],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}
