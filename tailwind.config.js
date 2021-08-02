const colors = require('tailwindcss/colors')
module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				cyan: colors.cyan,
				amber: colors.amber,
				rose: colors.rose
			},
			fontSize: {
				xxs: '.625rem'
			},
			spacing: {
				'2px': '2px',
				'3px': '3px',
				'5px': '5px',
				'6px': '6px',
				'7px': '7px',
				'8px': '8px',
				'9px': '9px',
				'1/7': '14.28%'
			},
			zIndex: {
				100: '100',
				200: '200',
				300: '300',
				400: '400',
				500: '500',
				600: '600',
				700: '700',
				800: '800',
				900: '900',
				1000: '1000',
				2000: '2000',
				3000: '3000',
				4000: '4000',
				5000: '5000'
			}
		}
	},
	variants: {
		extend: {
			gridAutoFlow: ['hover', 'focus'],
			position: ['hover', 'focus']
		},
		animation: ['hover', 'focus'],
		backgroundColor: ['checked', 'dark'],
		boxShadow: ['checked', 'hover', 'dark']
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp')
	],
	corePlugins: {
		overscrollBehavior: false
	}
}
