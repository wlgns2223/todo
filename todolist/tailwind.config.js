/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "../clone/*.{html}",
    ],
    theme: {
        fontFamily: {
            Nexa: ["Nexa"],
            Haepa: ["Haepa"],
        },
        extend: {
            dropShadow: {
                "3xl": "0px 2px 5px rgba(0, 0, 0, 0.5)",
            },
            colors: {
                "modal-bg": "#243c5a",
                "button-bg": "#E6E6FA",
                "text-col": "#175FE8",
                first: "#CCE1FF",
                second: "#90AFFF",
                "coloring": "#BE9F82"
            },
            margin: {
                90: "50rem",
            },
            backgroundImage: {
                'janda': "url('/images/JANDA.png')"
            }
        },
        
    },
    plugins: [],
};
