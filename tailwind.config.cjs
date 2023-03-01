/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.tsx",
    "./src/index.html",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'normal': '#121214',
        'input': '#F4F4FF',
        'placeholder': '#7C7C8A',
      },
      width: {
        'input': '21.75rem',
        'content': 'var(--radix-select-trigger-width)',
      },
      height: {
        'input': '3rem',
        'card': '20.1rem',
      },
      gridTemplateRows: {
        'home-layout': '33.25rem auto'
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")({
      variantPrefix: "rdx"
    }),
  ],
}
