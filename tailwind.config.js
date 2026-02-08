/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ab00ff',
                'primary-glow': 'rgba(171, 0, 255, 0.6)',
            }
        },
    },
    plugins: [],
}
