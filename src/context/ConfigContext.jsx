import PropTypes from 'prop-types'
import { createContext } from 'react'
import defaultConfig from '../config.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

const initialState = {
  ...defaultConfig,
  onChangeLocale: () => {},
  onChangeTheme: () => {},
  onChangeAccent: () => {},
  onChangeFont: () => {},
  onChangeBlur: () => {}
}

const ConfigContext = createContext(initialState)

function ConfigProvider ({ children }) {
  const [config, setConfig] = useLocalStorage('portfolio-config', {
    locale: initialState.locale,
    theme: initialState.theme,
    accent: initialState.accent,
    font: initialState.font,
    bgblur: initialState.bgblur
  })

  const onChangeLocale = (locale) => {
    setConfig({
      ...config,
      locale
    })
  }

  const onChangeTheme = (theme) => {
    setConfig({
      ...config,
      theme
    })
  }

  const onChangeAccent = (accent) => {
    setConfig({
      ...config,
      accent
    })
  }

  const onChangeFont = (font) => {
    setConfig({
      ...config,
      font
    })
  }

  const onChangeBlur = (bgblur) => {
    setConfig({
      ...config,
      bgblur
    })
  }

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeLocale,
        onChangeTheme,
        onChangeAccent,
        onChangeFont,
        onChangeBlur
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

ConfigProvider.propTypes = {
  children: PropTypes.node
}

export { ConfigContext, ConfigProvider }

