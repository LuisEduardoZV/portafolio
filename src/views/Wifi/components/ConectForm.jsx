import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { IconWifi } from '@tabler/icons-react'

const ConectForm = ({ handlePass, handleShowPass, handleCheckPassword, showPas, error, netSelected, pass, resetModal }) => {
  return (
    <form onSubmit={handleCheckPassword} className='w-full flex flex-col h-fit'>
      <div className='w-full flex items-center gap-x-3'>
        <IconWifi className='w-28 h-28 text-acc-main' />
        <label className='self-start pt-5 text-sm'>
          <FormattedMessage id='wifi-info-conect-pt1' /> {netSelected?.name} <FormattedMessage id='wifi-info-conect-pt2' />
        </label>
      </div>
      <div className='w-full h-fit flex flex-col items-center justify-center'>
        <div className='w-fit grid grid-cols-3 grid-rows-2 gap-3 justify-center'>
          <label className='justify-self-end'>
            <FormattedMessage id='wifi-password' />:
          </label>
          <input type={showPas ? 'text' : 'password'} value={pass} onChange={(e) => handlePass(e)} className={`justify-self-start col-span-2 rounded px-2 shadow focus:ring focus:ring-acc-main outline-none ${error ? 'border border-red-window focus:border-none' : 'border-none'}`} />
          <div className='col-span-3 justify-self-center flex gap-x-3 items-center pl-20'>
            <input type='checkbox' onChange={handleShowPass} checked={showPas} className='border-main-border hover:border-main-border cursor-pointer' />
            <label>
              <FormattedMessage id='wifi-show' />
            </label>
          </div>
        </div>
      </div>
      <div className='flex w-full h-fit justify-end gap-x-10 px-8 mt-10 mb-3'>
        <button
          className='px-3 rounded shadow-lg bg-gradient-to-t from-bg-200 to-bg-100 hover:shadow-md transition-shadow duration-200 ease-in-out'
          onClick={resetModal}
        >
          <FormattedMessage id='wifi-cancel' />
        </button>
        <button type='submit' className='px-3 rounded shadow-lg bg-gradient-to-t from-acc-main to-acc-main-low text-white hover:shadow-md transition-shadow duration-200 ease-in-out'>
          <FormattedMessage id='wifi-send' />
        </button>
      </div>
    </form>
  )
}

ConectForm.propTypes = {
  handlePass: PropTypes.func,
  handleShowPass: PropTypes.func,
  handleCheckPassword: PropTypes.func,
  resetModal: PropTypes.func,
  showPas: PropTypes.bool,
  error: PropTypes.bool,
  netSelected: PropTypes.object,
  pass: PropTypes.string
}

export default ConectForm
