import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import useConfig from '../hooks/useConfig'

// import projects
import { IconCheck } from '@tabler/icons-react'
import Divider from './ui-components/Divider'

const ChangeLocalizationMovil = () => {
  const { locale, onChangeLocale } = useConfig()

  const [lng, setLanguage] = useState(locale)

  const handleListItemClick = (event, lng) => {
    setLanguage(lng)
    onChangeLocale(lng)
  }

  useEffect(() => {
    setLanguage(locale)
  }, [locale])

  return (
    <>
      <div className='w-full justify-between items-center pt-3 pb-1 flex' onClick={(e) => handleListItemClick(e, 'es')}>
        <label className='pl-7 w-auto'>
          <FormattedMessage id='lng-es' />
        </label>
        <IconCheck className={`mr-5 text-acc-main ${lng === 'es' ? 'block' : 'hidden'}`} />
      </div>
      <Divider className='sm:hidden block w-11/12 self-end place-self-end sm:w-full mb-0' />
      <div className='w-full justify-between items-center pt-3 pb-1 flex' onClick={(e) => handleListItemClick(e, 'en')}>
        <label className='pl-7 w-auto'>
          <FormattedMessage id='lng-en' />
        </label>
        <IconCheck className={`mr-5 text-acc-main ${lng === 'en' ? 'block' : 'hidden'}`} />
      </div>
      <Divider className='sm:hidden block w-11/12 self-end place-self-end sm:w-full mb-0' />
      <div className='w-full justify-between items-center pt-3 pb-1 flex' onClick={(e) => handleListItemClick(e, 'fr')}>
        <label className='pl-7 w-auto'>
          <FormattedMessage id='lng-fr' />
        </label>
        <IconCheck className={`mr-5 text-acc-main ${lng === 'fr' ? 'block' : 'hidden'}`} />
      </div>
      <Divider className='sm:hidden block w-11/12 self-end place-self-end sm:w-full mb-0' />
      <div className='w-full justify-between items-center pt-2 pb-2 flex' onClick={(e) => handleListItemClick(e, 'pt')}>
        <label className='pl-7 w-auto'>
          <FormattedMessage id='lng-pt' />
        </label>
        <IconCheck className={`mr-5 text-acc-main ${lng === 'pt' ? 'block' : 'hidden'}`} />
      </div>
    </>
  )
}

export default ChangeLocalizationMovil

/*
<InputRadio handleListItemClick={handleListItemClick} title='lng-es' value='es' name='lng' defChecked={locale === 'es' && true} />
*/
