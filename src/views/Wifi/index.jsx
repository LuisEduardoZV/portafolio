import { useEffect, useMemo, useState } from 'react'
import { FormattedMessage } from 'react-intl'

// project imports
import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'
import InputSwitch from '../../components/ui-components/InputSwitch'
import ConectForm from './components/ConectForm'
import ConectFormMovil from './components/ConectFormMovil'

// assets
import { IconCheck, IconInfoCircle, IconLock, IconWifi, IconWifi0, IconWifi1, IconWifi2 } from '@tabler/icons-react'

// functions
import { not } from '../../utils/extraFunctions'

const NETOWRKS_PREFIX = ['INFINITUM', 'IZZI-']

const Wifi = () => {
  const [active, setActive] = useState(false)
  const [items, setItems] = useState([])

  const [actualNet, setActualNet] = useState({})
  const [netSelected, setNetSelected] = useState(null)
  const [pass, setPass] = useState('')
  const [showPas, setShowPass] = useState(false)

  const [timerLoaderPass, setTimerLoaderPass] = useState(false)

  const [modal, setModal] = useState(false)
  const [error, setError] = useState(false)

  const handleActive = () => {
    setActive((current) => !current)
  }

  const handleModal = (data) => {
    if (data.open) {
      setTimerLoaderPass(true)
      setModal(false)
      setNetSelected(null)
      setActualNet(data)
    } else {
      setModal((current) => !current)
      setNetSelected(data)
    }
  }

  const resetModal = () => {
    setModal(false)
    setPass('')
    setShowPass(false)
    setNetSelected(null)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleShowPass = () => {
    setShowPass((current) => !current)
  }

  const handleCheckPassword = (e) => {
    e.preventDefault()
    if (pass?.trim() === '' || pass === undefined) setError(true)
    else {
      setTimerLoaderPass(true)
      setModal(false)
      setActualNet(netSelected)
      setNetSelected(null)
      setPass('')
      setShowPass(false)
    }
  }

  const networksAvailable = () => {
    let available = [...Array(10).keys()].map((el, index) => {
      const obj = {}
      const random = Math.floor(Math.random() * 90000) + 10000
      obj.id = index - 1
      obj.name = NETOWRKS_PREFIX[Math.floor(Math.random() * NETOWRKS_PREFIX.length)] + random
      obj.open = random > 50000
      obj.intensity = random < 15000 ? 1 : random < 30000 ? 3 : random < 60000 ? 0 : 1
      return obj
    })
    available = available.sort((a, b) => b.intensity - a.intensity)
    console.log(available)
    setItems(available)
  }

  const Conect = useMemo(() => (window.screen.width < 576 ? ConectFormMovil : ConectForm), [])

  useEffect(() => {
    networksAvailable()
  }, [])

  useEffect(() => {
    let id
    if (actualNet.name) {
      id = setTimeout(() => setTimerLoaderPass(false), 2000)
    }
    if (actualNet && actualNet.id !== undefined) setItems(not(items, actualNet.id, 'id'))
    return () => {
      clearTimeout(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualNet])

  return (
    <>
      <MainCard>
        <header className='w-full h-fit py-10 px-5 hidden sm:block'>
          <h1 className='text-2xl font-bold text-main-text'>
            <FormattedMessage id='menu-item-wifi' />
          </h1>
        </header>
        <MainContentCard className='sm:w-11/12 mt-10 sm:mt-0 p-0'>
          <section className='grid grid-cols-12 w-full h-fit justify-items-stretch content-center place-content-center'>
            <label className='flex justify-self-end items-center w-full' />
            <label className={`flex w-full col-span-7 sm:col-span-9 items-center ${active && actualNet.name && 'border-b border-b-gray-300'}`}>
              <FormattedMessage id='menu-item-wifi' />
            </label>
            <div className={`justify-self-center items-center justify-center col-span-4 sm:col-span-2 ${active && actualNet.name && 'border-b border-b-gray-300'} flex w-full`}>
              <InputSwitch handleListItemClick={handleActive} />
            </div>
          </section>
          <section className={`grid grid-cols-12 w-full ${active && actualNet.name ? 'h-fit opacity-100 mt-4' : 'opacity-0 h-0'} justify-items-stretch content-center place-content-center transition-all duration-100 ease-linear pb-2 sm:pb-0`}>
            <label className='flex justify-self-end items-center justify-end mr-1 sm:mr-5 w-full'>{timerLoaderPass
              ? <div className='custom-loader' />
              : <IconCheck className='h-5 w-5 sm:h-6 sm:w-6 text-acc-main' />}
            </label>
            <label className='flex w-full col-span-7 sm:col-span-9 items-center'>{actualNet?.name}</label>
            <div className='justify-self-center col-span-4 sm:col-span-2 w-full flex items-center justify-end sm:justify-center gap-x-1 sm:gap-x-2 pr-2 sm:pr-0'>
              <div className='w-7'>{!actualNet?.open && <IconLock className='h-6 w-6 text-main-text-low cursor-default' />}</div>
              <div className='w-7'>{actualNet?.intensity === 0 ? <IconWifi0 className='h-6 w-6 text-main-text-low cursor-default' /> : actualNet?.intensity === 1 ? <IconWifi1 className='h-6 w-6 text-main-text-low cursor-default' /> : actualNet?.intensity === 2 ? <IconWifi2 className='h-6 w-6 text-main-text-low cursor-default' /> : <IconWifi className='h-6 w-6 text-main-text-low cursor-default' />}</div>
              <div className='w-7'>
                <IconInfoCircle className='h-6 w-6 text-acc-main cursor-pointer' />
              </div>
            </div>
          </section>
        </MainContentCard>
        <label className={`flex w-full px-5 sm:px-10 text-main-text-low text-xs sm:text-sm sm:mt-3 ${active ? 'h-0 hidden' : 'h-fit block'}`}>
          <FormattedMessage id='wifi-info' />
        </label>
        <div className={`flex w-full h-full mt-8 items-center gap-x-2 ${!active ? 'opacity-0' : 'opacity-100'} transition-opacity duration-100`}>
          <label className='uppercase text-main-text-low pl-7 sm:pl-10'>
            <FormattedMessage id='wifi-subtitle' />
          </label>
          <div className={`custom-loader ${active && 'opacity-0 delay-700'} transition-opacity duration-100 ease-linear`} />
        </div>
        <MainContentCard className={`${active ? 'opacity-100' : 'opacity-0'} ${active && 'delay-700'} ${active ? 'h-fit' : 'h-0'} ${active ? 'z-0' : '-z-10'} p-0 mb-24 sm:mb-0 sm:w-11/12`}>
          {items.map((data, index) => {
            return (
              <section
                key={index}
                className='grid grid-cols-12 w-full h-fit justify-items-stretch content-center place-content-center cursor-pointer '
                onClick={() => {
                  handleModal(data)
                }}
              >
                <label className='flex justify-self-end items-center cursor-default w-full' />
                <label className={`flex w-full col-span-7 sm:col-span-9 items-center ${active && 'border-b border-b-gray-300'} py-3 cursor-pointer`}>{data.name}</label>
                <div className={`justify-self-center col-span-4 sm:col-span-2 w-full flex items-center justify-end sm:justify-center gap-x-1 sm:gap-x-2 pr-2 sm:pr-0 ${active && 'border-b border-b-gray-300'} flex w-full py-3`}>
                  <div className='w-6'>{!data.open && <IconLock className='h-5 w-5 text-main-text-low cursor-default' />}</div>
                  <div className='w-6'>{data.intensity === 0 ? <IconWifi0 className='h-5 w-5 text-black cursor-default' /> : data.intensity === 1 ? <IconWifi1 className='h-5 w-5 text-main-text-low cursor-default' /> : data.intensity === 2 ? <IconWifi2 className='h-5 w-5 text-main-text-low cursor-default' /> : <IconWifi className='h-5 w-5 text-main-text-low cursor-default' />}</div>
                  <div className='w-6'>
                    <IconInfoCircle className='h-5 w-5 text-acc-main cursor-pointer' />
                  </div>
                </div>
              </section>
            )
          })}
          <section className='grid grid-cols-12 w-full h-fit justify-items-stretch content-center place-content-center'>
            <label className='flex justify-self-end items-center w-full' />
            <label className='flex w-full col-span-9 items-center  py-3'>
              <FormattedMessage id='wifi-other' />
            </label>
            <div className='justify-self-center col-span-2 w-full flex items-center justify-center gap-x-2 py-3' />
          </section>
        </MainContentCard>
      </MainCard>
      <article className={`flex flex-col items-center justify-center w-full sm:w-5/6 h-full m-0 ${modal ? 'z-[9999999] opacity-100' : '-z-10 opacity-0'} absolute top-0 sm:top-auto bg-black/10 backdrop-blur-[1px] transition-all duration-200 ease-linear delay-100 sm:w-full`}>
        <section className='bg-bg-100 shadow p-3 rounded-lg max-w-lg w-full h-full sm:h-fit relative'>
          <Conect
            handlePass={handlePass}
            handleShowPass={handleShowPass}
            handleCheckPassword={handleCheckPassword}
            resetModal={resetModal}
            showPas={showPas}
            error={error}
            netSelected={netSelected}
            pass={pass}
          />
        </section>
      </article>
    </>
  )
}

export default Wifi
