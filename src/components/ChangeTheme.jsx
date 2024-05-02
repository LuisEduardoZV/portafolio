import { useEffect, useMemo, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import useConfig from '../hooks/useConfig'

// project imports
import PrevThemeView from './extends/PrevThemeView'
import PrevThemeViewMovil from './extends/PrevThemeViewMovil'

import { IconCheck } from '@tabler/icons-react'

const ChangeTheme = () => {
  const { theme, onChangeTheme, bgblur } = useConfig()

  const [themeSel, setThemeSelected] = useState(theme)

  const handleListItemClick = (event, thm) => {
    setThemeSelected(thm)
    onChangeTheme(thm)
  }

  const PrevView = useMemo(() => (window.screen.width < 576 ? PrevThemeViewMovil : PrevThemeView), [])

  useEffect(() => {
    setThemeSelected(theme)
  }, [theme])

  return (
    <div className='flex w-fit h-fit flex-wrap justify-center gap-x-14 gap-y-10 sm:justify-around'>
      <div className='flex flex-col p-3 justify-center items-center gap-y-2' onClick={(e) => handleListItemClick(e, 'default')}>
        <PrevView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='default' blur={bgblur} />
        <label>
          <FormattedMessage id='theme-light' />
        </label>
        <div className={`flex rounded-full border border-gray-500 p-0.5 w-6 h-6 items-center justify-center ${themeSel === 'default' ? 'bg-acc-main' : 'bg-transparent'} sm:hidden transition-colors duration-300 ease-in-out`}>
          <IconCheck className={`w-auto h-auto self-center ${themeSel === 'default' ? 'block text-bg-200' : 'hidden'} transition-colors duration-300 ease-in-out`} />
        </div>
      </div>
      <div className='flex flex-col p-3 justify-center items-center gap-y-2' onClick={(e) => handleListItemClick(e, 'dark')}>
        <PrevView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='dark' blur={bgblur} />
        <label>
          <FormattedMessage id='theme-dark' />
        </label>
        <div className={`flex rounded-full border border-gray-500 p-0.5 w-6 h-6 items-center justify-center ${themeSel === 'dark' ? 'bg-acc-main' : 'bg-transparent'} sm:hidden transition-colors duration-300 ease-in-out`}>
          <IconCheck className={`w-auto h-auto self-center ${themeSel === 'dark' ? 'block text-bg-200' : 'hidden'} transition-colors duration-300 ease-in-out`} />
        </div>
      </div>
      <div className='flex flex-col p-3 justify-center items-center gap-y-2' onClick={(e) => handleListItemClick(e, 'cinnamon')}>
        <PrevView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='cinnamon' blur={bgblur} />
        <label>
          <FormattedMessage id='theme-cinnamon' />
        </label>
        <div className={`flex rounded-full border border-gray-500 p-0.5 w-6 h-6 items-center justify-center ${themeSel === 'cinnamon' ? 'bg-acc-main' : 'bg-transparent'} sm:hidden transition-colors duration-300 ease-in-out`}>
          <IconCheck className={`w-auto h-auto self-center ${themeSel === 'cinnamon' ? 'block text-bg-100' : 'hidden'} transition-colors duration-300 ease-in-out`} />
        </div>
      </div>
      <div className='flex flex-col p-3 justify-center items-center gap-y-2' onClick={(e) => handleListItemClick(e, 'lavanda')}>
        <PrevView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='lavanda' blur={bgblur} />
        <label>
          <FormattedMessage id='theme-lavanda' />
        </label>
        <div className={`flex rounded-full border border-gray-500 p-0.5 w-6 h-6 items-center justify-center ${themeSel === 'lavanda' ? 'bg-acc-main' : 'bg-transparent'} sm:hidden transition-colors duration-300 ease-in-out`}>
          <IconCheck className={`w-auto h-auto self-center ${themeSel === 'lavanda' ? 'block text-bg-100' : 'hidden'} transition-colors duration-300 ease-in-out`} />
        </div>
      </div>
    </div>
  )
}

export default ChangeTheme
