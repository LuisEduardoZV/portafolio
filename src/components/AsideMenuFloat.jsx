import PropTypes from 'prop-types'
import { Fragment, useMemo } from 'react'
import { mergeClasses } from '../utils/mergeClasses'

// assets
import useConfig from '../hooks/useConfig'
import { mainMenuItems, menuItemsSec1, menuItemsSec2, menuItemsSec3 } from '../utils/menuItems'
import { Menu } from './Menu'

export default function AsideMenuFloat ({ setOpen, open, path }) {
  const { bgblur } = useConfig()

  const menuItems = useMemo(() => ([...mainMenuItems, ...menuItemsSec1, ...menuItemsSec2, ...menuItemsSec3]), [])

  return (
    <>
      <div className={mergeClasses('min-w-full absolute min-h-screen bg-gray-900/70 z-50 transition-opacity duration-300 ease-in-out', `${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`)} onClick={() => setOpen(false)} />
      <div className={mergeClasses('flex h-full min-h-screen w-1/2 md:w-2/5 flex-col shadow-main-card overflow-y-hidden absolute top-0 left-0 bg-fondo bg-cover bg-no-repeat z-[999999999] transition-all translate-x-0 items-center duration-300 ease-in-out', `${open ? 'translate-x-0' : '-translate-x-full'}`)}>
        <Menu path={path} menuItems={menuItems} containerClasses={mergeClasses('z-50 min-h-screen p-5 transition-colors duration-300 ease-in-out', `${bgblur ? 'bg-bg-200/80' : 'bg-bg-200/100'}`)} />
      </div>
    </>
  )
}

AsideMenuFloat.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  path: PropTypes.string
}
