import { Dialog, Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import PropTypes from 'prop-types'
import { Fragment, useMemo } from 'react'

// assets
import useConfig from '../hooks/useConfig'
import { mainMenuItems, menuItemsSec1, menuItemsSec2, menuItemsSec3 } from '../utils/menuItems'
import { Menu } from './Menu'

export default function AsideMenuFloat ({ setOpen, open, path }) {
  const { bgblur } = useConfig()

  const menuItems = useMemo(() => ([...mainMenuItems, ...menuItemsSec1, ...menuItemsSec2, ...menuItemsSec3]), [])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-500'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-500'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-[20rem] z-50'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 z-20'>
                      <button
                        type='button'
                        className='relative rounded-md text-gray-300 hover:text-gray-400'
                        onClick={() => setOpen(false)}
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Close panel</span>
                        <IconX className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className={`absolute left-0 right-0 top-0 bottom-0 flex h-full flex-col py-0 shadow-xl ${bgblur ? 'bg-main-fondo' : 'bg-bg-200'} bg-cover bg-center bg-no-repeat z-0`}>
                    <div className={`pt-6 pr-6 w-full min-h-screen ${bgblur ? 'backdrop-blur-2xl bg-bg-200/60' : 'bg-bg-200'} backdrop-blur-2xl z-10 absolute left-0 right-0 top-0 bottom-0`}>
                      <Menu path={path} menuItems={menuItems} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

AsideMenuFloat.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  path: PropTypes.string
}
