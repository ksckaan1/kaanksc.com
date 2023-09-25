/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                kPurple: "#411F89",
                kPurpleDark: "#2C165C",
                kWhite: "#C9C9C9",
                kYellow: "#F5B32F",
                kCode: "#282A36"
            },
            backgroundImage: {
                gopherbg: "url('/img/bg.webp')",
                gridbg: "url('/img/grid.png')",
            },
            fontFamily: {
                "poppins": ["Poppins", "sans-serif"]
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar'),
    ],
}

