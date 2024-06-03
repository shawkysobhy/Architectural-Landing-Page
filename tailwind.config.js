/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: '#F8F8F8',
				darkGray: '#3D3D3D',
				brand: '#4B2A63',
				lightBrand: '#451A64',
				brandDark: '#241330',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},

			screens: {
				xs: '350px',
        sm:'480px',
				md: '720px',
				ms: '1090px',
				ml: '1440px',
        lg:'720px',
			},
		},
	},
	plugins: [],
};
