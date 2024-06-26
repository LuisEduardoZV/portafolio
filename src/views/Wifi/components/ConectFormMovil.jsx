import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const ConectFormMovil = ({ handlePass, handleShowPass, handleCheckPassword, showPas, error, netSelected, pass, resetModal }) => {
  return (
    <form
      onSubmit={handleCheckPassword} className='w-full flex flex-col h-fit
    items-center p-0'
    >
      <span className='text-main-text font-light text-sm italic'>
        <FormattedMessage id='wifi-info-title' values={{ wifi: netSelected?.name }} />
      </span>
      <div className='flex w-full justify-between px-3 mt-5'>
        <button className='text-acc-main' onClick={resetModal}>
          <FormattedMessage id='wifi-cancel' />
        </button>
        <h3 className='font-semibold text-main-text-low'>
          <FormattedMessage id='wifi-ing' />
        </h3>
        <button type='submit' className={`${pass?.trim() === '' ? 'text-main-text-low' : 'text-acc-main'}`} disabled={!!(pass?.trim() === '')}>
          <FormattedMessage id='wifi-conect' />
        </button>
      </div>
      <div className='w-full mt-10 items-center px-2'>
        <div className='bg-bg-200 px-5 py-2.5 rounded-xl flex items-center gap-3'>
          <label className='w-auto text-main-text-low'>
            <FormattedMessage id='wifi-password' />
          </label>
          <input type='password' value={pass} onChange={(e) => handlePass(e)} className='justify-self-start bg-transparent ring-0 h-full w-full outline-none text-main-text-low' />
        </div>
        <label className='flex w-full px-5 sm:px-10 text-main-text-low text-sm mt-3'>
          <FormattedMessage id='wifi-info-movil' />
        </label>
      </div>
    </form>
  )
}

ConectFormMovil.propTypes = {
  handlePass: PropTypes.func,
  handleShowPass: PropTypes.func,
  handleCheckPassword: PropTypes.func,
  resetModal: PropTypes.func,
  showPas: PropTypes.bool,
  error: PropTypes.bool,
  netSelected: PropTypes.object,
  pass: PropTypes.string
}

export default ConectFormMovil
