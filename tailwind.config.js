/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			'01': '#2C3039',
			'02': {
				light: '#3f4654e6 ',
				DEFAULT: '#3F4654',
			},
			'03': '#A0A5AA',
			'04': {
				light: '#b8bfc6cc',
				DEFAULT: '#C9CACB',
			},
			'05': '#EEEEEE',
			'06': '#C4A577',
			'07': '#E9CB9E',
			'08': '#F3EDE4',
			'09': '#FFFFFF',
		},
	},
	plugins: [],
};

