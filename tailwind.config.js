/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                main: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/bg.jpg')",
            },
            screens: {
                xs: "330px",
                s: "500px",
            },
        },
    },
    plugins: [],
};
