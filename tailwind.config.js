/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FF6600",
                "background-light": "#F5F5F7",
                "background-dark": "#111111",
                "surface-dark": "#1E1E1E",
                "text-light": "#333333",
                "text-dark": "#E5E5E5",
            },
            fontFamily: {
                display: ["Teko", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
            },
            backgroundImage: {
                'road-texture': "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                'carbon': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
            }
        },
    },
    plugins: [
        import("@tailwindcss/typography")
    ],
}
