import PropTypes from 'prop-types'
import { useMemo } from 'react'

const PrevThemeViewMovil = ({ handleListItemClick, thisViewIs }) => {
  const styles = useMemo(() => {
    switch (thisViewIs) {
      case 'dark':
        return {
          mainAside: 'bg-dark-200/40',
          filter: 'grayscale-[40%]'
        }
      case 'cinnamon':
        return {
          mainAside: 'bg-cinnamon-200/70',
          filter: 'sepia-[.2] saturate-150'
        }
      case 'lavanda':
        return {
          mainAside: 'bg-lavanda-200/70',
          filter: ''
        }
      default:
        return {
          mainAside: 'bg-main-100/40',
          filter: ''
        }
    }
  }, [thisViewIs])
  return (
    <div className={`flex flex-col w-[4.3rem] h-36 shadow-md rounded-xl bg-fondoMovil bg-top bg-cover bg-no-repeat relative cursor-pointer transition-all duration-300 ease-in-out ${styles.filter}`} onClick={(event) => handleListItemClick(event, thisViewIs)}>
      <span className='self-center mt-[20%] font-semibold tracking-widest text-white'>9:41</span>
      <div className={`absolute w-5/6 h-5 ${styles.mainAside} top-[40%] left-1/2 -translate-x-1/2 rounded backdrop-blur-lg flex transition-colors duration-300 ease-in-out`} />
      <div className={`absolute w-5/6 h-5 ${styles.mainAside} top-[57%] left-1/2 -translate-x-1/2 rounded backdrop-blur-lg flex transition-colors duration-300 ease-in-out`} />
    </div>
  )
}

PrevThemeViewMovil.propTypes = {
  handleListItemClick: PropTypes.func,
  thisViewIs: PropTypes.string
}

export default PrevThemeViewMovil
