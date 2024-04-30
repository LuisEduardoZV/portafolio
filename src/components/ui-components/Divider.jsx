import PropTypes from 'prop-types'
import { mergeClasses } from '../../utils/mergeClasses'

const Divider = ({ className }) => {
  return <div className={mergeClasses('bg-main-border w-full h-[0.05rem] my-2 transition-all duration-300 ease-in-out', className)} />
}

Divider.propTypes = {
  className: PropTypes.string
}

export default Divider
