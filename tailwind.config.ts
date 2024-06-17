const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui(),
        addVariablesForColors,
        function ({ addUtilities }: { addUtilities: Function }) {
            const newUtilities = {
                ".no-scrollbar": {
                    /* Oculta la barra de desplazamiento en navegadores Webkit (Safari, Chrome) */
                    "::-webkit-scrollbar": {
                        display: "none",
                    },
                    /* Oculta la barra de desplazamiento en navegadores Firefox */
                    "-ms-overflow-style": "none" /* IE y Edge */,
                    "scrollbar-width": "none" /* Firefox */,
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
