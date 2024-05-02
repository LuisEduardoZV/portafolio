import { FormattedMessage } from 'react-intl'
import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'
import ChangeAccent from '../../components/ChangeAccent'
import ChangeAsideBlur from '../../components/ChangeAsideBlur'
import ChangeFont from '../../components/ChangeFont'
import ChangeLocalization from '../../components/ChangeLocalization'
import ChangeLocalizationMovil from '../../components/ChangeLocalizationMovil'
import ChangeTheme from '../../components/ChangeTheme'
import Divider from '../../components/ui-components/Divider'

const Config = () => {
  return (
    <MainCard extraStyles='min-h-screen overflow-y-auto mr-1'>
      <header className='w-full h-fit py-10 px-5 hidden sm:flex'>
        <h1 className='text-2xl font-bold text-main-text'>
          <FormattedMessage id='config-title' />
        </h1>
      </header>
      <h2 className='flex sm:hidden self-start mt-10 sm:mt-0 text-main-text-low font-light text-sm tracking-wide uppercase pl-5'>
        <FormattedMessage id='config-aspect' />
      </h2>
      <MainContentCard className='duration-300 ease-in-out sm:w-11/12 sm:mt-0 p-0'>
        <div className='w-full flex justify-between px-5 py-8 sm:px-2 sm:py-5'>
          <h2 className='hidden sm:block'>
            <FormattedMessage id='config-aspect' />
          </h2>
          <ChangeTheme />
        </div>
        <Divider className='hidden sm:block' />
        <div className='w-full justify-between px-2 py-5 hidden sm:flex'>
          <h2>
            <FormattedMessage id='config-color' />
          </h2>
          <ChangeAccent />
        </div>
        <Divider className='hidden sm:block' />
        <div className='w-full justify-between px-2 py-5 hidden sm:flex'>
          <h2>
            <FormattedMessage id='config-font' />
          </h2>
          <ChangeFont />
        </div>
        <Divider className='w-11/12 self-end sm:w-full' />
        <div className='w-full flex justify-between pl-7 pr-2 py-1 sm:pl-0 sm:pr-0 sm:px-2 sm:py-5 items-center sm:items-start'>
          <h2 className='hidden sm:block'>
            <FormattedMessage id='config-blur' />
          </h2>
          <h2 className='block text-lg sm:hidden'>
            <FormattedMessage id='config-blur-movil' />
          </h2>
          <ChangeAsideBlur />
        </div>
      </MainContentCard>
      <MainContentCard className='duration-300 ease-in-out sm:w-11/12 mt-14 sm:mt-0 p-0'>
        <div className='w-full justify-between pl-7 pr-3 py-5 sm:pl-0 sm:pr-0 sm:px-2 sm:py-5 sm:hidden flex flex-col gap-5'>
          <h2>
            <FormattedMessage id='config-color' />
          </h2>
          <ChangeAccent />
        </div>
        <Divider className='sm:hidden block w-11/12 self-end sm:w-full' />
        <div className='w-full justify-between pl-7 pr-2 py-1 sm:pl-0 sm:pr-0 sm:px-2 sm:py-5 sm:hidden flex'>
          <h2 className='sm:block hidden'>
            <FormattedMessage id='config-font' />
          </h2>
          <h2 className='block text-lg sm:hidden'>
            <FormattedMessage id='config-font-movil' />
          </h2>
          <ChangeFont />
        </div>
        <div className='w-full flex-col justify-between px-2 py-5 hidden sm:flex'>
          <h2 className='mb-5'>
            <FormattedMessage id='config-language' />
          </h2>
          <ChangeLocalization />
        </div>
      </MainContentCard>
      <h2 className='flex sm:hidden self-start mt-10 sm:mt-0 text-main-text-low font-light text-sm tracking-wide uppercase pl-5'>
        <FormattedMessage id='config-language-movil' />
      </h2>
      <MainContentCard className='duration-300 ease-in-out sm:w-11/12 p-0 mb-24 sm:mb-0 sm:hidden'>
        <ChangeLocalizationMovil />
      </MainContentCard>
    </MainCard>
  )
}

export default Config
