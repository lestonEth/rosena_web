// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // Ensures dark mode works
    theme: {
        extend: {
            colors: {
                primary: '#5D5CDE',
                accent: '#21CDB9',
                darkBg: '#0D1520',
                darkCard: '#151F2E',
                darkBorder: '#263040',
            },
        },
    },
    plugins: [],
};
