import { IconChevronRight } from '@tabler/icons-react'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { mergeClasses } from '../utils/mergeClasses'

// assets
import Divider from '../components/ui-components/Divider'
import { mainMenuItems, menuItemsSec1, menuItemsSec2, menuItemsSec3 } from '../utils/menuItems'
import MainContentCard from './Cards/MainContentCard'

export default function AsideMenuMovil ({ setOpen, open, path }) {
  return (
    <div className={mergeClasses('flex sm:hidden h-full w-full flex-col shadow-xl bg-bg-100 p-5 overflow-y-auto absolute top-0 left-0 dark:bg-gray-800 z-[999999999] transition-transform translate-x-0 items-center duration-300', `${open ? 'translate-x-0' : '-translate-x-full'}`)}>
      <MainContentCard className='rounded-xl px-0 w-11/12'>
        <Link to='' className='flex w-full h-fit gap-x-5 items-center px-3 relative' onClick={() => setOpen(false)}>
          <div className='bg-profile h-16 w-16 bg-no-repeat bg-top bg-cover rounded-full lg:h-14 lg:w-14' />
          <div className='flex flex-col'>
            <label className='font-bold'>Luis E. Zúñiga V.</label>
            <span className='lg:text-sm'>Front End Developer</span>
          </div>
          <IconChevronRight className='absolute top-[50%] -translate-y-[50%] right-[3%] text-main-text-low' />
        </Link>
        <Divider className='w-3/4 self-end bg-gray-500' />
        {mainMenuItems.map((data, index) => {
          const Icon = data.Icon
          return (
            <Fragment key={index}>
              <Link to={data.page} className='flex w-full gap-x-5 rounded-lg px-7 py-1 transition-colors duration-300 ease-in-out relative z-50' onClick={() => setOpen(false)}>
                <span className={`h-7 w-7 ${data.color} rounded-md flex items-center justify-center shadow`}>
                  <Icon className='h-6 w-6 text-white' />
                </span>
                <label className='cursor-pointer'>
                  <FormattedMessage id={data.title} />
                </label>
                <IconChevronRight className='absolute top-[50%] -translate-y-[50%] right-[3%] text-main-text-low' />
              </Link>
              {!(index === mainMenuItems.length - 1) && <Divider className='w-[80%] self-end bg-gray-500' />}
            </Fragment>
          )
        })}
      </MainContentCard>

      <MainContentCard className='rounded-xl px-0 w-11/12'>
        {menuItemsSec1.map((data, index) => {
          const Icon = data.Icon
          return (
            <Fragment key={index}>
              <Link to={data.page} className='flex w-full gap-x-5 rounded-lg px-7 py-1 transition-colors duration-300 ease-in-out relative z-50' onClick={() => setOpen(false)}>
                <span className={`h-7 w-7 ${data.color} rounded-md flex items-center justify-center shadow`}>
                  <Icon className='h-6 w-6 text-white' />
                </span>
                <label className='cursor-pointer'>
                  <FormattedMessage id={data.title} />
                </label>
                <IconChevronRight className='absolute top-[50%] -translate-y-[50%] right-[3%] text-main-text-low' />
              </Link>
              {!(index === menuItemsSec1.length - 1) && <Divider className='w-[80%] self-end bg-gray-500' />}
            </Fragment>
          )
        })}
      </MainContentCard>

      <MainContentCard className='rounded-xl px-0 w-11/12'>
        {menuItemsSec2.map((data, index) => {
          const Icon = data.Icon
          return (
            <Fragment key={index}>
              <Link to={data.page} className='flex w-full gap-x-5 rounded-lg px-7 py-1 transition-colors duration-300 ease-in-out relative z-50' onClick={() => setOpen(false)}>
                <span className={`h-7 w-7 ${data.color} rounded-md flex items-center justify-center shadow`}>
                  <Icon className='h-6 w-6 text-white' />
                </span>
                <label className='cursor-pointer'>
                  <FormattedMessage id={data.title} />
                </label>
                <IconChevronRight className='absolute top-[50%] -translate-y-[50%] right-[3%] text-main-text-low' />
              </Link>
              {!(index === menuItemsSec2.length - 1) && <Divider className='w-[80%] self-end bg-gray-500' />}
            </Fragment>
          )
        })}
      </MainContentCard>

      <MainContentCard className='rounded-xl px-0 w-11/12'>
        {menuItemsSec3.map((data, index) => {
          const Icon = data?.Icon
          if (data.itsSiri) {
            return (
              <Fragment key={index}>
                <Link to='#' className='flex w-full gap-x-5 rounded-lg px-7 py-1 transition-colors duration-300 ease-in-out relative z-50'>
                  <span className='h-8 w-8 rounded-md flex items-center justify-center p-0 m-0 -ml-0.5 bg-cover bg-no-repeat bg-top' style={{ backgroundImage: `url('${Icon}')` }} />
                  <label className='cursor-pointer'>
                    <FormattedMessage id='menu-item-siri' />
                  </label>
                  <IconChevronRight className='absolute top-[50%] -translate-y-[50%] right-[3%] text-main-text-low' />
                </Link>
                {!(index === menuItemsSec3.length - 1) && <Divider className='w-[80%] self-end bg-gray-500' />}
              </Fragment>
            )
          } else if (data.itsControl) {
            return (
              <Fragment key={index}>
                <Link to='#' className='flex w-full gap-x-5 rounded-lg px-7 py-1 transition-colors duration-300 ease-in-out relative z-50'>
                  <span className='h-7 w-7 bg-gradient-to-t from-gray-icon-full to-gray-icon-low rounded-md flex items-center justify-center shadow'>
                    <span className='h-6 w-6' style={{ backgroundImage: `url('${Icon}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                  </span>
                  <label className='cursor-pointer'>
                    <FormattedMessage id='menu-item-control' />
                  </label>
                  <IconChevronRight className='absolute top-[50%] -translate-y-[50%] right-[3%] text-main-text-low' />
                </Link>
                {!(index === menuItemsSec3.length - 1) && <Divider className='w-[80%] self-end bg-gray-500' />}
              </Fragment>
            )
          }
          return (
            <Fragment key={index}>
              <Link to={data.page} className='flex w-full gap-x-5 rounded-lg px-7 py-1 transition-colors duration-300 ease-in-out relative z-50'>
                <span className={`h-7 w-7 ${data.color} rounded-md flex items-center justify-center shadow`}>
                  <Icon className='h-6 w-6 text-white' />
                </span>
                <label className='cursor-pointer'>
                  <FormattedMessage id={data.title} />
                </label>
                <IconChevronRight className='absolute top-[50%] -translate-y-[50%] right-[3%] text-main-text-low' />
              </Link>
              {!(index === menuItemsSec3.length - 1) && <Divider className='w-[80%] self-end bg-gray-500' />}
            </Fragment>
          )
        })}
      </MainContentCard>
    </div>

  )
}

AsideMenuMovil.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  path: PropTypes.string
}
