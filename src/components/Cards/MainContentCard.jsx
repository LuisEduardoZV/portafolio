import PropTypes from 'prop-types'
import { useMemo } from 'react'

import useConfig from '../../hooks/useConfig'
import { mergeClasses } from '../../utils/mergeClasses'

const MainContentCard = ({ children, className, style, ...others }) => {
  const { font } = useConfig()

  const defClasses = useMemo(
    () => (`opacity-100 h-fit rounded-xl sm:rounded-lg p-3 sm:p-3 w-full flex flex-col my-4 bg-bg-200 border border-main-border items-center text-main-text ${font ? 'font-normal' : 'font-bold'} transition-all duration-0 ease-linear`),
    [font]
  )

  return <article className={mergeClasses(defClasses, className)} style={style}>{children}</article>
}

MainContentCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default MainContentCard
