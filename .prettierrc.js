module.exports = {
    semi: true,
    trailingComma: "all",
    singleQuote: false,
    tabWidth: 4,
    useTabs: true,
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './styles/tailwind.config.js',
}