import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { mergeClasses } from '../utils/mergeClasses'
import { HoverEffect } from './extends/CarHoverEffect'

import { lazy, memo } from 'react'

const AsideMenuItem = lazy(() => import('./AsideMenuItem'))

const Menu = memo(({ path, menuItems, containerClasses }) => {
  return (
    <section className={mergeClasses('flex flex-col w-full h-screen gap-y-2 min-h-screen overflow-y-auto m-0 pl-5 pr-3 sm:pr-6 text-main-text flex-1', containerClasses)}>
      <Link to='' className='flex w-full h-fit gap-x-5 items-center mb-5'>
        <div className='bg-profile h-16 w-16 bg-no-repeat bg-top bg-cover rounded-full lg:h-14 lg:w-14 relative animate-wiggleIcon' />
        <div className='flex flex-col'>
          <label className='font-bold'>Luis E. Zúñiga V.</label>
          <span className='lg:text-sm text-main-text-low'>Front End Developer</span>
        </div>
      </Link>
      <div className='flex flex-col w-full h-full bg-transparent flex-1 relative'>
        <HoverEffect hoverClasses='start-0 w-full' containerClasses='p-0 py-0.5 px-0' actualPath={path} inMenu>
          {/* MAIN SECTION */}
          {menuItems.map((data, index) => {
            const selected = path === data.page && true
            return <AsideMenuItem {...data} active={selected} key={index} needPing={index < 4} />
          })}
        </HoverEffect>
      </div>
    </section>
  )
})

Menu.displayName = 'Menu'

Menu.propTypes = {
  path: PropTypes.string,
  containerClasses: PropTypes.string,
  menuItems: PropTypes.array
}

export { Menu }

