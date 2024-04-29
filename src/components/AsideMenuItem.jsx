import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import useConfig from '../hooks/useConfig'
import { mergeClasses } from '../utils/mergeClasses'

const AsideMenuItem = ({ Icon, color, page, title, itsSiri = false, itsControl = false, active = false, itemClass }) => {
  const { font } = useConfig()

  const defClasses = useMemo(() => `flex gap-x-5 rounded-lg px-2 py-1 transition-colors duration-300 ease-in-out relative z-50 ${active && 'text-white bg-acc-main shadow-md'}`, [active])

  if (itsSiri) {
    return (
      <Link to='#' className={mergeClasses(defClasses, itemClass)}>
        <span className='h-8 w-8 rounded-md flex items-center justify-center p-0 m-0 -ml-0.5 bg-cover bg-no-repeat bg-top' style={{ backgroundImage: `url('${Icon}')` }} />
        <label className={`cursor-pointer ${font ? 'font-normal' : 'font-bold'}`}>
          <FormattedMessage id='menu-item-siri' />
        </label>
      </Link>
    )
  } else if (itsControl) {
    return (
      <Link to='#' className={mergeClasses(defClasses, itemClass)}>
        <span className='h-7 w-7 bg-gradient-to-t from-gray-icon-full to-gray-icon-low rounded-md flex items-center justify-center shadow'>
          <span className='h-6 w-6' style={{ backgroundImage: `url('${Icon}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
        </span>
        <label className={`cursor-pointer ${font ? 'font-normal' : 'font-bold'}`}>
          <FormattedMessage id='menu-item-control' />
        </label>
      </Link>
    )
  } else {
    return (
      <Link to={page} className={mergeClasses(defClasses, itemClass)}>
        <span className={`h-7 w-7 ${color} rounded-md flex items-center justify-center shadow`}>
          <Icon className='h-6 w-6 text-white' />
        </span>
        <label className={`cursor-pointer ${font ? 'font-normal' : 'font-bold'}`}>
          <FormattedMessage id={title} />
        </label>
      </Link>
    )
  }
}

AsideMenuItem.propTypes = {
  Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  page: PropTypes.string,
  title: PropTypes.string,
  itsSiri: PropTypes.bool,
  itsControl: PropTypes.bool,
  active: PropTypes.bool,
  itemClass: PropTypes.string
}

export default AsideMenuItem
