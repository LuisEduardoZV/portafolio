import { IconMenu } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AsideMenu from '../components/AsideMenu'
import AsideMenuMovil from '../components/AsideMenuMovil'
import useConfig from '../hooks/useConfig'

// <FormattedMessage id="tittle" />
const MainContainer = () => {
  const { theme, accent } = useConfig()
  const { pathname } = useLocation()

  const [path, setPath] = useState('')
  const [actMenu, setActMenu] = useState(false)

  useEffect(() => {
    setPath(pathname.slice(1, pathname.length))
  }, [pathname])

  return (
    <main className={`${theme} ${accent} min-h-screen max-h-screen flex flex-row bg-main-fondo bg-cover bg-center bg-no-repeat cursor-default overflow-hidden transition-all duration-300 ease-in-out`}>
      <AsideMenu path={path} />
      <AsideMenuMovil setOpen={setActMenu} open={actMenu} path={path} />
      <section className='flex w-[82%] h-full min-h-screen bg-bg-100 transition-all duration-300 ease-in-out sm:w-full md:w-[82%] relative'>
        <div className='hidden absolute bg-bg-200 p-1 rounded start-5 top-10 hover:cursor-pointer sm:flex md:hidden' onClick={() => { setActMenu(true) }}>
          <IconMenu className='text-main-text-low' size={22} />
        </div>
        <Outlet />
      </section>
    </main>
  )
}

export default MainContainer
