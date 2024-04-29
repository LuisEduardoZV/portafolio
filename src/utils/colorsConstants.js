const defaultTheme = {
  extend: {
    name: 'default',
    colors: {
      bg: {
        100: '#fffdfc',
        200: '#f2efed'
      },
      'main-text': '#5A5553',
      'main-text-low': '#827f7e',
      'main-border': '#fffdfc'
    }
  }
}

const themes = [
  {
    name: 'dark',
    extend: {
      colors: {
        bg: {
          200: '#3E454F',
          100: '#1E1E1E'
        },
        'main-text': '#fff',
        'main-text-low': '#fff',
        'main-border': '#1E1E1E'
      }
    }
  },
  {
    name: 'cinnamon',
    extend: {
      colors: {
        bg: {
          100: '#F8E9D6',
          200: '#CFAE8E'
        },
        'main-text': '#4D3830',
        'main-border': '#b19172'
      }
    }
  },
  {
    name: 'lavanda',
    extend: {
      colors: {
        bg: {
          100: '#E9E4ED',
          200: '#D6C6E1'
        },
        'main-text': '#4A4A4A',
        'main-border': '#e3daea'
      }
    }
  },
  {
    name: 'acc-default',
    extend: {
      colors: {
        'acc-main': '#3478F6',
        'acc-main-low': '#5093F7'
      }
    }
  },
  {
    name: 'acc-green',
    extend: {
      colors: {
        'acc-main': '#33C558',
        'acc-main-low': '#72EB6C'
      }
    }
  },
  {
    name: 'acc-red',
    extend: {
      colors: {
        'acc-main': '#EB445A',
        'acc-main-low': '#ED6A83'
      }
    }
  },
  {
    name: 'acc-orange',
    extend: {
      colors: {
        'acc-main': '#EB4E3D',
        'acc-main-low': '#ED766B'
      }
    }
  },
  {
    name: 'acc-purple',
    extend: {
      colors: {
        'acc-main': '#5856CF',
        'acc-main-low': '#807EE2'
      }
    }
  },
  {
    name: 'acc-brown',
    extend: {
      colors: {
        'acc-main': '#835c36',
        'acc-main-low': '#835c36'
      }
    }
  },
  {
    name: 'acc-yellow',
    extend: {
      colors: {
        'acc-main': '#F4BF4F',
        'acc-main-low': '#F4BF4F'
      }
    }
  }
]

const allThemes = [defaultTheme, ...themes]

export { allThemes, defaultTheme, themes }

