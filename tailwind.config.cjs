/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: '#1A1A1A',
				card: 'rgba(255, 255, 255, 0.03)'
			}
		}
	},
	plugins: []
};
