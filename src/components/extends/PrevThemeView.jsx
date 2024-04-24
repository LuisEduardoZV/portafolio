import PropTypes from 'prop-types'
import { useMemo } from 'react'

const PrevThemeView = ({ handleListItemClick, theme, thisViewIs, blur }) => {
  const selected = useMemo(() => (theme === thisViewIs), [theme, thisViewIs])

  const styles = useMemo(() => {
    switch (thisViewIs) {
      case 'dark':
        return {
          blurMain: `bg-dark-200/${blur ? 70 : 100}`,
          mainAside: 'bg-dark-200/10',
          borderMain: 'border-dark-200',
          main: 'bg-dark-100'
        }
      case 'cinnamon':
        return {
          blurMain: `bg-cinnamon-100/${blur ? 70 : 100}`,
          mainAside: 'bg-cinnamon-200',
          borderMain: 'border-cinnamon-200',
          main: 'bg-cinnamon-100'
        }
      case 'lavanda':
        return {
          blurMain: `bg-lavanda-100/${blur ? 70 : 100}`,
          mainAside: 'bg-lavanda-200',
          borderMain: 'border-lavanda-200',
          main: 'bg-lavanda-100'
        }
      default:
        return {
          blurMain: `bg-main-200/${blur ? 60 : 100}`,
          mainAside: 'bg-main-100/20',
          borderMain: 'border-main-200',
          main: 'bg-main-100'
        }
    }
  }, [thisViewIs, blur])
  return (
    <div className={`flex flex-col w-32 h-20 shadow-md rounded-xl bg-fondo bg-top bg-cover bg-no-repeat relative ${selected && 'ring-4 ring-acc-main'} border-white border cursor-pointer transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, thisViewIs)}>
      <div className={`w-16 h-6 rounded shadow ${styles.blurMain} backdrop-blur flex items-start justify-center absolute top-2 left-3 transition-colors duration-300 ease-in-out`}>
        <div className='w-14 h-3 rounded bg-acc-main mt-1 shadow transition-colors duration-300 ease-in-out' />
      </div>
      <div className={`absolute w-3/4 h-1/2 ${styles.mainAside} bottom-0 right-0 rounded-tl-lg rounded-br-xl backdrop-blur-lg flex transition-colors duration-300 ease-in-out`}>
        <div className={`h-full w-1/2 ${styles.blurMain} backdrop-blur-xl rounded-tl-lg flex border-r ${styles.borderMain} transition-colors duration-300 ease-in-out`}>
          <div className='flex w-fit h-fit p-2 gap-x-1'>
            <span className='flex h-2 w-2 rounded-full bg-red-window' />
            <span className='flex h-2 w-2 rounded-full bg-yellow-window' />
            <span className='flex h-2 w-2 rounded-full bg-green-window' />
          </div>
        </div>
        <div className={`h-full w-1/2 ${styles.main} rounded-br-xl flex transition-colors duration-300 ease-in-out`}>
          <div className={`flex w-full border-b h-1/2 ${styles.borderMain} transition-colors duration-300 ease-in-out`} />
        </div>
      </div>
    </div>
  )
}

PrevThemeView.propTypes = {
  handleListItemClick: PropTypes.func,
  theme: PropTypes.string,
  thisViewIs: PropTypes.string,
  blur: PropTypes.bool
}

export default PrevThemeView
