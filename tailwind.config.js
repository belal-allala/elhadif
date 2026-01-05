/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Charte graphique جمعية الهادف
                primary: {
                    DEFAULT: '#7fb432', // Vert principal
                    light: '#9bc95a',
                    dark: '#6a9829',
                },
                secondary: {
                    DEFAULT: '#2b5c74', // Bleu foncé pour les titres
                    light: '#3a7a96',
                    dark: '#1f4456',
                },
                accent: {
                    DEFAULT: '#f49a25', // Orange/Jaune pour les accents
                    light: '#f7b055',
                    dark: '#d6831a',
                },
            },
            fontFamily: {
                arabic: ['Tajawal', 'Cairo', 'sans-serif'],
                sans: ['Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
