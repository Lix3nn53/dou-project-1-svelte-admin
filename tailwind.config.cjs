const production = !process.env.ROLLUP_WATCH;

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					500: '#757d8a',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5'
				}
			}
		}
	},
	plugins: [],
	darkMode: 'class',
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true
	}
};
