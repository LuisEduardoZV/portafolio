import { useMemo, useState } from 'react'
import { FormattedMessage } from 'react-intl'

// project imports
import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'
import InputSwitch from '../../components/ui-components/InputSwitch'

// icons and assets
import { IconBluetooth, IconInfoCircle } from '@tabler/icons-react'

const devicesData = [
  {
    id: 1,
    img: 'bg-keyboard',
    status: false,
    name: 'Keyboard KG567-H'
  },
  {
    id: 2,
    img: 'bg-controller',
    status: false,
    name: 'Wireless Controller'
  },
  {
    id: 3,
    img: 'bg-wireless',
    status: false,
    name: 'NoAirPods de Luis'
  }
]

const Bluetooth = () => {
  const [active, setActive] = useState(false)
  const [conected, setConected] = useState([])

  const handleActive = () => {
    setActive((current) => !current)
  }

  const handleConect = (data) => {
    const devices = [].concat(conected).push(data)
    setConected(devices)
  }

  const movil = useMemo(() => (window.screen.width < 576), [])

  return (
    <>
      <MainCard extraStyles='pt-5 sm:pt-0'>
        <header className='w-full h-fit py-10 px-5 hidden sm:block'>
          <h1 className='text-2xl font-bold text-main-text'>
            <FormattedMessage id='menu-item-bluetooth' />
          </h1>
        </header>
        <MainContentCard className='p-0 sm:p-5 sm:w-11/12 mb-1 sm:mb-4'>
          <section className='flex w-full h-fit sm:gap-x-5 items-center justify-between sm:justify-normal pl-5 sm:pl-0'>
            <div className='w-fit hidden sm:block'>
              <span className='h-10 w-10 bg-acc-main rounded-md flex items-center justify-center shadow-xl'>
                <IconBluetooth className='h-9 w-9 text-white' />
              </span>
            </div>
            <div className='flex w-full flex-col'>
              <FormattedMessage id='menu-item-bluetooth' />
              <label className='hidden sm:block text-sm text-acc-main sm:text-xs lg:text-base'>
                <FormattedMessage id={active ? 'bth-on-desk' : 'bth-off'} />
              </label>
            </div>
            <div className='flex w-fit'>
              <InputSwitch handleListItemClick={handleActive} />
            </div>
          </section>
        </MainContentCard>
        <label className='flex pl-5 sm:hidden w-full text-sm text-main-text-low sm:text-acc-main sm:text-xs lg:text-base'>
          <FormattedMessage id={active ? 'bth-on-movil' : 'bth-off'} />
        </label>
        <div className={`flex w-full h-full mt-8 items-center gap-x-2 ${!active ? 'opacity-0' : 'opacity-100'} transition-opacity duration-0  sm:w-11/12`}>
          <label className='text-main-text pl-5 sm:pl-1 font-semibold uppercase sm:normal-case text-sm sm:text-base'>
            <FormattedMessage id='bth-mydevices' />
          </label>
        </div>
        <MainContentCard className={`p-3 pl-5 sm:p-5 duration-0 ${active ? 'opacity-100' : 'opacity-0'} sm:w-11/12`}>
          <section className='hidden sm:flex w-full h-fit items-center gap-x-5 relative'>
            <IconInfoCircle className={`h-6 w-6 text-main-text-low justify-end items-start absolute -top-2 -right-1 cursor-pointer hover:text-acc-main transition-colors duration-150 ease ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-500`} />
            <div className={`h-full w-auto ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-500`}>
              <div className='bg-speaker bg-contain bg-no-repeat w-12 h-12' />
            </div>
            <label className={`${active ? 'opacity-0 absolute invisible' : 'opacity-100 relative visible'} transition-visible duration-100 ease-linear delay-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
              <FormattedMessage id='bth-nodevices' />
            </label>
            <div className={`flex flex-col w-full justify-between ${!active ? 'opacity-0 invisible absolute' : 'opacity-100 relative visible'} transition-visible duration-75 ease-linear delay-500`}>
              <label className='font-medium text-base'>TWS MP3</label>
              <label className='font-normal text-sm'>
                <FormattedMessage id='bth-noconect' />
              </label>
            </div>
          </section>
          <section className='flex sm:hidden w-full h-fit items-center gap-x-5 relative'>
            <label className={`${active ? 'opacity-0 absolute invisible' : 'opacity-100 relative visible'} transition-visible duration-100 ease-linear delay-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
              <FormattedMessage id='bth-nodevices' />
            </label>
            <div className={`flex flex-row w-full justify-between ${!active ? 'opacity-0 invisible absolute' : 'opacity-100 relative visible'} transition-visible duration-75 ease-linear delay-500`}>
              <label className='font-medium'>TWS MP3</label>
              <label className='font-normal flex gap-3 items-center'>
                <FormattedMessage id='bth-noconect' />
                <IconInfoCircle className={`h-6 w-6 justify-end items-start cursor-pointer text-acc-main transition-colors duration-150 ease ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-500`} />
              </label>
            </div>
          </section>
        </MainContentCard>
        <div className={`flex w-full h-full mt-8 items-center gap-x-2 ${!active ? 'opacity-0' : 'opacity-100'} transition-opacity duration-0  sm:w-11/12`}>
          <label className='text-main-text pl-5 sm:pl-1 font-semibold uppercase sm:normal-case text-sm sm:text-base'>
            <FormattedMessage id='bth-neardevices' />
          </label>
          <div className='custom-loader visible transition-visible duration-100 ease-linear' />
        </div>
        <MainContentCard className={`p-5 duration-0 relative gap-y-10 ${active ? 'opacity-100' : 'opacity-0'} sm:w-11/12`}>
          <label className={`${active ? 'opacity-0 absolute invisible' : 'opacity-100 relative visible'} transition-visible duration-100 ease-linear delay-[1200ms] top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block`}>
            <FormattedMessage id='bth-searching' />
          </label>
          {devicesData.map((data) => movil
            ? (
              <section
                key={data.id} className='flex sm:hidden w-full h-fit items-center gap-x-5 relative' onClick={() => {
                  handleConect(data)
                }}
              >
                <div className={`flex flex-row w-full justify-between ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-500`}>
                  <label className='font-medium w-full'>{data.name}</label>
                </div>
              </section>
              )
            : (
              <section key={data.id} className={`flex w-full h-fit items-center gap-x-5 relative ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-[1200ms]`}>
                <div className='h-full w-auto flex items-center'>
                  <div className={`${data.img} bg-contain bg-no-repeat bg-center w-12 h-12`} />
                </div>
                <div className='flex flex-col w-full justify-between'>
                  <label className='font-medium text-base'>{data.name}</label>
                  <label className='font-normal text-sm'>
                    <FormattedMessage id={data.status ? 'bth-conect' : 'bth-noconect'} />
                  </label>
                </div>
                <button
                  className='py-0.5 px-2.5 rounded-md shadow-md bg-bg-100'
                  onClick={() => {
                    handleConect(data)
                  }}
                >
                  <FormattedMessage id='wifi-conect' />
                </button>
              </section>
              ))}
        </MainContentCard>
      </MainCard>
    </>
  )
}

export default Bluetooth
