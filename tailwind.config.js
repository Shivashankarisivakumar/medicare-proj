/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  			'bs-blue': '#0d6efd',
  			'bs-indigo': '#6610f2',
  			'bs-purple': '#6f42c1',
  			'bs-pink': '#d63384',
  			'bs-red': '#dc3545',
  			'bs-orange': '#fd7e14',
  			'bs-yellow': '#ffc107',
  			'bs-green': '#198754',
  			'bs-teal': '#20c997',
  			'bs-cyan': '#0dcaf0',
  			'bs-white': '#fff',
  			'bs-gray': '#6c757d',
  			'bs-gray-dark': '#343a40',
  			'bs-primary': '#06A3EF',
  			'bs-secondary': '#F57E57',
  			'bs-success': '#198754',
  			'bs-info': '#0dcaf0',
  			'bs-warning': '#ffc107',
  			'bs-danger': '#dc3545',
  			'bs-light': '#EEF9FF',
  			'bs-dark': '#091E3E',
  			blizzard: {
  				'100': '#F0F8FF',
  				'200': '#C6E2FF',
  				'300': '#A0C4F0',
  				'400': '#7A98DB',
  				'500': '#5C7BD9'
  			},
  		
  		},
		  fontFamily: {
			lexend_deca: ["Lexend Deca", "serif"],
			jost: ["Jost", "sans-serif"]
		},
    },
  },
  plugins: [],
}

