module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
		  colors: {
			customBlue: '#1D4ED8', //Blå farge #5573CE
			customViolet: '#311687', //Mørk lilla farge #311687
			customYellow: '#FFF8DA', //Lysegul farge #FFF8DA
		  },
		},
	  },
	plugins: [require('tailwindcss-safe-area')],
}
