/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          'dark': '#950014',
          'main': '#cd3b3b',
          'light': '#ff6e66',
        },
        secondary:{
          'dark': '#005f9b',
          'main': '#278ccc',
          'light': '#69bcff',
        },
        system:{
          error:{
            'dark': '#c62828',
            'main': '#d32f2f',
            'light': '#ef5350',
          },
          success:{
            'dark': '#1b5e20',
            'main': '#2e7d32',
            'light': '#4caf50',
          },
          warning:{
            'dark': '#e65100',
            'main': '#ed6c02',
            'light': '#ff9800',
          },
          confirm:{
            'dark': '#01579b',
            'main': '#0288d1',
            'ight': '#03a9f4',
          },
          gray:{
            '900': '#2D2D2D',
            '800': '#222629',
            '500': '#474b4f',
            '400': '#6b6e70',
            '100': '#E7E7E7'
          }
        },
        types:{
          'grass': '#388545',
          'electric': '#e9aa30',
          'fairy': '#e14c89',
          'fire': '#da3d38',
          'normal': '#e0e0e0',
          'fighter': '#b9433f',
          'poison': '#9f4ea4',
          'dragon': '#996e00',
          'steel': '#827d79',
          'water': '#3f9dc7',
          'dark': '#3d5669'
        }
      }
    },
  },
  plugins: [],
}
