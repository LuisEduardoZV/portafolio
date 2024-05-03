import { IconChevronLeft, IconMenu } from '@tabler/icons-react'
import { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AsideMenu from '../components/AsideMenu'
import AsideMenuFloat from '../components/AsideMenuFloat'
import AsideMenuMovil from '../components/AsideMenuMovil'
import useConfig from '../hooks/useConfig'
import { FormattedMessage } from 'react-intl'


// <FormattedMessage id="tittle" />
const MainContainer = () => {
  const { theme, accent } = useConfig()
  const { pathname } = useLocation()

  const [path, setPath] = useState('')
  const [actMenu, setActMenu] = useState(false)
  const [movil, setMovil] = useState(true)

  const title = useMemo(() => {
    switch (path) {
      case 'config':
        return 'menu-item-config'
      case 'projects':
        return 'menu-item-projects'
      case 'wifi':
        return 'menu-item-wifi'
      case 'bluetooth':
        return 'menu-item-bluetooth'
      default:
        return 'menu-item-info'
    }
  }, [path])

  useEffect(() => {
    setPath(pathname.slice(1, pathname.length))
  }, [pathname])

  return (
    <main className={`${theme} ${accent} min-h-screen max-h-screen flex flex-row bg-main-fondo bg-cover bg-center bg-no-repeat cursor-default overflow-hidden transition-all duration-300 ease-in-out`}>
      <AsideMenu path={path} />
      <AsideMenuFloat setOpen={setActMenu} open={actMenu} path={path} />
      <AsideMenuMovil setOpen={setMovil} open={movil} path={path} />
      <section className='flex h-full min-h-screen bg-bg-100 transition-all duration-300 ease-in-out w-full relative lg:w-3/4 xl:w-5/6 flex-col sm:flex-row py-7 sm:py-0'>
        <div className='w-full px-5 py-3 flex items-center sm:hidden fixed bg-bg-100/50 z-[999999] backdrop-blur-lg top-0'>
          <div className='py-0.5 flex gap-3 cursor-pointer text-acc-main' onClick={() => setMovil(true)}>
            <IconChevronLeft />
            Menu
          </div>
          <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-lg text-main-text font-semibold'>
            <FormattedMessage id={title} />
          </span>
        </div>
        <div className='hidden absolute bg-bg-200 p-1 rounded start-5 top-10 hover:cursor-pointer sm:flex lg:hidden' onClick={() => { setActMenu(true) }}>
          <IconMenu className='text-main-text-low' size={22} />
        </div>
        <Outlet />
      </section>
    </main>
  )
}

export default MainContainer
