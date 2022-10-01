/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'category-info': 'max-content, max-content;',
			},
		},
		colors: {
			text: '#2B374A',
			h1Clr: '#2E3A4C',
			btnClr: '#13232F',
			white: '#fff',
			grayTxt: '#848E9D',
			prim: '#5793EE',
			optionClr: '#22262D',
			bgGray: '#EBEBEB',
			errorTxt: '#D04B4B',
		},
	},
	plugins: [],
};
