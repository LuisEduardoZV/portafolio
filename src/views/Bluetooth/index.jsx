import { useEffect, useState } from 'react'
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
    console.log(data)
    const devices = [].concat(conected).push(data)
    console.log(devices)
    setConected(devices)
  }

  useEffect(() => {
    console.log(conected)
  }, [conected])

  return (
    <>
      <MainCard>
        <header className='w-full h-fit py-10 px-5'>
          <h1 className='text-2xl font-bold text-main-text'>
            <FormattedMessage id='menu-item-bluetooth' />
          </h1>
        </header>
        <MainContentCard p='p-5'>
          <section className='flex w-full h-fit gap-x-5 items-center'>
            <div className='w-fit'>
              <span className='h-10 w-10 bg-acc-main rounded-md flex items-center justify-center shadow-xl'>
                <IconBluetooth className='h-9 w-9 text-white' />
              </span>
            </div>
            <div className='flex w-full flex-col'>
              <FormattedMessage id='menu-item-bluetooth' />
              <label className='text-sm text-acc-main-low'>{active ? 'Ahora visible como "MocBaack NoAir".' : 'Localización, NoAirDrop y No AirPlay usan Bluetlooth'}</label>
            </div>
            <div className='flex w-fit'>
              <InputSwitch handleListItemClick={handleActive} />
            </div>
          </section>
        </MainContentCard>
        <div className={`flex w-full h-full mt-8 items-center gap-x-2 ${!active ? 'opacity-0' : 'opacity-100'} transition-opacity duration-0`}>
          <label className='text-main-text pl-1 font-semibold'>Mis dispositivos</label>
        </div>
        <MainContentCard p='p-5' opacity={active ? 'opacity-100' : 'opacity-0'} duration='duration-0'>
          <section className='flex w-full h-fit items-center gap-x-5 relative'>
            <IconInfoCircle className={`h-6 w-6 text-main-text-low justify-end items-start absolute -top-2 -right-1 cursor-pointer hover:text-acc-main transition-colors duration-150 ease ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-500`} />
            <div className={`h-full w-auto ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-500`}>
              <div className='bg-speaker bg-contain bg-no-repeat w-12 h-12' />
            </div>
            <label className={`${active ? 'opacity-0 absolute invisible' : 'opacity-100 relative visible'} transition-visible duration-100 ease-linear delay-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>Ningún Dispositivo Bluetooth</label>
            <div className={`flex flex-col w-full justify-between ${!active ? 'opacity-0 invisible absolute' : 'opacity-100 relative visible'} transition-visible duration-75 ease-linear delay-500`}>
              <label className='font-medium text-base'>TWS MP3</label>
              <label className='font-normal text-sm'>Sin conexión</label>
            </div>
          </section>
        </MainContentCard>
        <div className={`flex w-full h-full mt-8 items-center gap-x-2 ${!active ? 'opacity-0' : 'opacity-100'} transition-opacity duration-0`}>
          <label className='text-main-text pl-1 font-semibold'>Dispositivos cercanos</label>
          <div className={`custom-loader ${active && 'opacity-0 delay-700 invisible'} visible transition-visible duration-100 ease-linear`} />
        </div>
        <MainContentCard p='p-5' opacity={active ? 'opacity-100' : 'opacity-0'} duration='duration-0' position='relative' gapy='gap-y-10'>
          <label className={`${active ? 'opacity-0 absolute invisible' : 'opacity-100 relative visible'} transition-visible duration-100 ease-linear delay-[1200ms] top-10 left-1/2 -translate-x-1/2 -translate-y-1/2`}>Buscando...</label>
          {devicesData.map((data) => (
            <section key={data.id} className={`flex w-full h-fit items-center gap-x-5 relative ${!active ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-visible duration-75 ease-linear delay-[1200ms]`}>
              <div className='h-full w-auto flex items-center'>
                <div className={`${data.img} bg-contain bg-no-repeat bg-center w-12 h-12`} />
              </div>
              <div className='flex flex-col w-full justify-between'>
                <label className='font-medium text-base'>{data.name}</label>
                <label className='font-normal text-sm'>{data.status ? 'Conectado' : 'No Conectado'}</label>
              </div>
              <button
                className='py-0.5 px-2.5 rounded-md shadow-md bg-bg-100'
                onClick={() => {
                  handleConect(data)
                }}
              >
                Conectar
              </button>
            </section>
          ))}
        </MainContentCard>
      </MainCard>
    </>
  )
}

export default Bluetooth
