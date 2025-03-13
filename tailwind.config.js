module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
		  colors: {
			customBlue: '#1D4ED8', //Blå outline farge #5573CE
		  },
		},
	  },
	plugins: [require('tailwindcss-safe-area')],
}
