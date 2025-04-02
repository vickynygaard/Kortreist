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
			customYellow2: '#FDF8F2', //Bakgrunnsfarge #FDF8F2
			customOrange: '#FFC089', // Oransje farge  #FFC089
			customGreen: '#1D8800', // Grønn farge  #1D8800
			customRed: '#CE001A', // Rød farge  #CE001A
			bronze: "#cd7f32",
			silver: "#C0C0C0",
			gold: "#FFD700"
		  },
		},
	  },
	  safelist: [
		'border-bronze',
		'border-silver',
		'border-gold',
	  ],
	plugins: [require('tailwindcss-safe-area')],
}
