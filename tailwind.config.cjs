/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./client/**/*.{html,ts,tsx,js,jsx}', './client/*.{html,ts,tsx,js,jsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
