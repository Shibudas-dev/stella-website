/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ff003c',
                'primary-glow': 'rgba(255, 0, 60, 0.6)',
            }
        },
    },
    plugins: [],
}
