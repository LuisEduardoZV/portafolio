/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
				'red-window': '#ED6A5E',
				'yellow-window': '#F4BF4F',
				'green-window': '#61C554',
				'blue-icon-full': '#3478F6',
				'blue-icon-low': '#5093F7',
				'red-icon-full': '#EB445A',
				'red-icon-low': '#ED6A83',
				'gray-icon-full': '#8E8E93',
				'gray-icon-low': '#B2B2B6',
				'orange-icon-full': '#EB4E3D',
				'orange-icon-low': '#ED766B',
				'purple-icon-full': '#5856CF',
				'purple-icon-low': '#807EE2',
				'light-blue-icon-full': '#71BCEB',
				'light-blue-icon-low': '#9DDEF8',
				'green-icon-full': '#33C558',
				'green-icon-low': '#72EB6C',
				dark: {
					200: '#3E454F',
					100: '#1E1E1E',
				},
				main: {
					100: '#fffdfc',
					200: '#f2efed',
				},
				cinnamon: {
					100: '#F8E9D6',
					200: '#CFAE8E',
				},
				lavanda: {
					100: '#E9E4ED',
					200: '#D6C6E1',
				},
			},
			backgroundImage: {
				profile: "url('/src/assets/profile.jpg')",
				fondo: "url('/src/assets/fondo.jpeg')",
				'main-fondo': "url('/src/assets/mainFondo.png')",
				speaker: "url('/src/assets/icons/speaker.svg')",
				'gradiant-loader': 'linear-gradient(0deg ,#766DF480 50%,#766DF4FF 0) center/4px 100%',
				wireless: "url('/src/assets/icons/wireless.png')",
				keyboard: "url('/src/assets/icons/keyboard.svg')",
				controller: "url('/src/assets/icons/controller.svg')",
			},
			boxShadow: {
				'input-radio': 'inset 0 0 0 0.3375em',
				'input-radio-before': 'inset 0 0 0 0.125em',
			},
			keyframes: {
				loader: {
					'100%': { transform: 'rotate(1turn)' },
				},
			},
			animation: {
				loader: 'loader 1s infinite steps(12)',
			},
			transitionProperty: {
				visible: 'visibility, opacity',
			},
		},
	},
	plugins: [
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						bg: {
							100: '#fffdfc',
							200: '#f2efed',
						},
						'main-text': '#5A5553',
						'main-text-low': '#827f7e',
						'main-border': '#fffdfc',
					},
				},
			},
			themes: [
				{
					name: 'dark',
					extend: {
						colors: {
							bg: {
								200: '#3E454F',
								100: '#1E1E1E',
							},
							'main-text': '#fff',
							'main-text-low': '#fff',
							'main-border': '#1E1E1E',
						},
					},
				},
				{
					name: 'cinnamon',
					extend: {
						colors: {
							bg: {
								100: '#F8E9D6',
								200: '#CFAE8E',
							},
							'main-text': '#4D3830',
							'main-border': '#b19172',
						},
					},
				},
				{
					name: 'lavanda',
					extend: {
						colors: {
							bg: {
								100: '#E9E4ED',
								200: '#D6C6E1',
							},
							'main-text': '#4A4A4A',
							'main-border': '#e3daea',
						},
					},
				},
				{
					name: 'acc-default',
					extend: {
						colors: {
							'acc-main': '#3478F6',
							'acc-main-low': '#5093F7',
						},
					},
				},
				{
					name: 'acc-green',
					extend: {
						colors: {
							'acc-main': '#33C558',
							'acc-main-low': '#72EB6C',
						},
					},
				},
				{
					name: 'acc-red',
					extend: {
						colors: {
							'acc-main': '#EB445A',
							'acc-main-low': '#ED6A83',
						},
					},
				},
				{
					name: 'acc-orange',
					extend: {
						colors: {
							'acc-main': '#EB4E3D',
							'acc-main-low': '#ED766B',
						},
					},
				},
				{
					name: 'acc-purple',
					extend: {
						colors: {
							'acc-main': '#5856CF',
							'acc-main-low': '#807EE2',
						},
					},
				},
				{
					name: 'acc-brown',
					extend: {
						colors: {
							'acc-main': '#835c36',
							'acc-main-low': '#835c36',
						},
					},
				},
				{
					name: 'acc-yellow',
					extend: {
						colors: {
							'acc-main': '#F4BF4F',
							'acc-main-low': '#F4BF4F',
						},
					},
				},
			],
		}),
	],
}

