import PropTypes from 'prop-types'
import { useMemo } from 'react'
import useConfig from '../hooks/useConfig'

import { Menu } from './Menu'

// assets
import { mainMenuItems, menuItemsSec1, menuItemsSec2, menuItemsSec3 } from '../utils/menuItems'

const AsideMenu = ({ path }) => {
  const { bgblur } = useConfig()

  const menuItems = useMemo(() => ([...mainMenuItems, ...menuItemsSec1, ...menuItemsSec2, ...menuItemsSec3]), [])

  return (
    <aside className={`flex flex-col w-[18%] h-full min-h-screen ${bgblur ? 'backdrop-blur-2xl bg-bg-200/60' : 'bg-bg-200'} pr-2 gap-y-3 text-main-text border-r-2 border-main-border group hidden lg:flex lg:w-1/4 xl:w-1/6`}>
      <div className='w-full h-fit py-5 px-5 flex flex-row justify-start gap-x-3'>
        <span className='h-4 w-4 bg-red-window rounded-full shadow-md' />
        <span className='h-4 w-4 bg-yellow-window rounded-full shadow-md' />
        <span className='h-4 w-4 bg-green-window rounded-full shadow-md' />
      </div>
      <div className='relative w-full h-full'>
        <Menu path={path} menuItems={menuItems} />
      </div>
    </aside>
  )
}

AsideMenu.propTypes = {
  path: PropTypes.string
}

export default AsideMenu
