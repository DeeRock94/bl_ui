/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",
      ],
  theme: {

    extend: {
        colors: {
            primary: '#FAF7FF',
            secondary: '#2C2C2C',
            tertiary: '#424050',
            accent: '#ED2F59',

            fail: '#FF0039',
            success: '#65E046',

            "primary-25": "#ED2F59",
            "primary-50": '#FAF7FF50',
            "primary-75": '#FAF7FF75',
          },
    },
  },
  plugins: [],
}

