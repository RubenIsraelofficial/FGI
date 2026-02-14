/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#008550",
                "primary-dark": "#006b40",
                "gold": "#D4AF37",
                "gold-light": "#F9F1D8",
                "background-light": "#f5f8f7",
                "background-dark": "#0f231b",
                "surface-light": "#ffffff",
                "surface-dark": "#1a2f26",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            borderRadius: {
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem"
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 133, 80, 0.1)',
                'glow': '0 0 15px rgba(0, 133, 80, 0.3)',
                'card': '0 10px 40px -10px rgba(0,0,0,0.08)'
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
