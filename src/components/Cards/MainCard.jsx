import PropTypes from 'prop-types'

import { mergeClasses } from '../../utils/mergeClasses'

const MainCard = ({ children, extraStyles }) => {
  return (
    <section
      className={mergeClasses('w-full h-full flex flex-col px-10 min-h-screen max-h-screen overflow-y-scroll mr-1 transition-all duration-300 ease-in-out items-center gap-0', extraStyles)}
    >
      {children}
    </section>
  )
}

MainCard.propTypes = {
  children: PropTypes.node,
  extraStyles: PropTypes.string
}

export default MainCard
