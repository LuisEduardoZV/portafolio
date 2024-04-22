import PropTypes from 'prop-types'

const Divider = ({ width = 'w-full' }) => {
  return <div className={`bg-main-border ${width} h-[0.05rem] my-2 transition-all duration-300 ease-in-out`} />
}

Divider.propTypes = {
  width: PropTypes.string
}

export default Divider
