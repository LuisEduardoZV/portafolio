import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useConfig from '../hooks/useConfig'

// import project
import AsideMenuItem from './AsideMenuItem'
import Divider from './ui-components/Divider'

// assets
import { mainMenuItems, menuItemsSec1, menuItemsSec2, menuItemsSec3 } from '../utils/menuItems'

const AsideMenu = ({ path }) => {
  const { bgblur } = useConfig()

  return (
    <aside className={`flex flex-col w-[18%] h-full min-h-screen ${bgblur ? 'backdrop-blur-2xl bg-bg-200/60' : 'bg-bg-200'} pr-2 gap-y-3 text-main-text border-r-2 border-main-border group`}>
      <div className='w-full h-fit py-5 px-5 flex flex-row justify-start gap-x-3'>
        <span className='h-4 w-4 bg-red-window rounded-full shadow-md' />
        <span className='h-4 w-4 bg-yellow-window rounded-full shadow-md' />
        <span className='h-4 w-4 bg-green-window rounded-full shadow-md' />
      </div>
      <section className='flex flex-col w-full h-full gap-y-2 max-h-[90vh] overflow-y-scroll m-0 pl-5 pr-3'>
        <Link to='' className='flex w-full h-fit gap-x-5 items-center mb-5'>
          <div className='bg-profile h-16 w-16 bg-no-repeat bg-top bg-cover rounded-full' />
          <div className='flex flex-col'>
            <label className='font-bold'>Luis E. Zúñiga V.</label>
            <span>Front End Developer</span>
          </div>
        </Link>
        {/* MAIN SECTION */}
        {mainMenuItems.map((data, index) => {
          return <AsideMenuItem {...data} active={path === data.page && true} key={index} />
        })}
        <Divider />
        <section className='flex flex-col w-full h-fit gap-y-5'>
          <div className='flex flex-col w-full h-fit'>
            {menuItemsSec1.map((data, index) => {
              return <AsideMenuItem {...data} active={path === data.page && true} key={index} />
            })}
          </div>
          <div className='flex flex-col w-full h-fit'>
            {menuItemsSec2.map((data, index) => {
              return <AsideMenuItem {...data} active={path === data.page && true} key={index} />
            })}
          </div>
          <div className='flex flex-col w-full h-fit'>
            {menuItemsSec3.map((data, index) => {
              return <AsideMenuItem {...data} active={path === data.page && true} key={index} />
            })}
          </div>
        </section>
      </section>
    </aside>
  )
}

AsideMenu.propTypes = {
  path: PropTypes.string
}

export default AsideMenu
