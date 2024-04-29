/** @type {import('tailwindcss').Config} */
import { themes, defaultTheme } from './src/utils/colorsConstants'

export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px'
      },
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
          100: '#1E1E1E'
        },
        main: {
          100: '#fffdfc',
          200: '#f2efed'
        },
        cinnamon: {
          100: '#F8E9D6',
          200: '#CFAE8E'
        },
        lavanda: {
          100: '#E9E4ED',
          200: '#D6C6E1'
        }
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
        loginBlack: "url('/src/assets/projects/LoginBlack.png')",
        loginDefault: "url('/src/assets/projects/LoginDefault.png')",
        mainBlack: "url('/src/assets/projects/MainBlack.png')",
        mainDefault: "url('/src/assets/projects/MainDefault.png')",
        weatherMain: "url('/src/assets/projects/WeatherMain.png')",
        weatherHour: "url('/src/assets/projects/WeatherHour.jpg')",
        serverDefault: "url('/src/assets/projects/ServerDefault.png')",
        serverMain: "url('/src/assets/projects/ServerMain.png')"
      },
      boxShadow: {
        'input-radio': 'inset 0 0 0 0.3375em',
        'input-radio-before': 'inset 0 0 0 0.125em'
      },
      keyframes: {
        loader: {
          '100%': { transform: 'rotate(1turn)' }
        },
        formingImages: {
          '0%, 10%': {
            'clip-path': 'polygon(0 0, 100% 0, 100% 10%, 0 90%)'
          },
          '40%, 60%': {
            'clip-path': 'polygon(0 90%, 100% 10%, 100% 100%, 0 100%)'
          }
        },
        formingImagesAlter: {
          '0%, 10%': {
            'clip-path': 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)'
          },
          '50%, 60%': {
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
          }
        }
      },
      animation: {
        loader: 'loader 1s infinite steps(12)',
        formingImages: 'formingImages 10s infinite normal forwards',
        formingImagesSecond: 'formingImages 10s infinite normal forwards 0.7s',
        formingImagesAlter: 'formingImagesAlter 10s infinite normal'
      },
      transitionProperty: {
        visible: 'visibility, opacity'
      }
    }
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme,
      themes
    })
  ]
}

