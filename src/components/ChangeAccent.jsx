import { useEffect, useMemo, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import useConfig from '../hooks/useConfig'

const ChangeAccent = () => {
  const { accent, onChangeAccent } = useConfig()

  const [accentSelected, setAccentSelected] = useState(accent)

  const handleListItemClick = (event, acc) => {
    setAccentSelected(acc)
    onChangeAccent(acc)
  }

  const selected = useMemo(() => {
    switch (accentSelected) {
      case 'acc-default':
        return 0
      case 'acc-green':
        return 1
      case 'acc-red':
        return 2
      case 'acc-orange':
        return 3
      case 'acc-purple':
        return 4
      case 'acc-brown':
        return 5
      case 'acc-yellow':
        return 6
      default:
        return 0
    }
  }, [accentSelected])

  useEffect(() => {
    setAccentSelected(accent)
  }, [accent])

  return (
    <div className='flex w-fit h-fit gap-x-3 items-start justify-center'>
      <div className='w-fit flex flex-col items-center gap-y-1 mr-2'>
        <span className={`h-5 w-5 bg-blue-icon-full rounded-full cursor-pointer ${selected === 0 && 'ring-1 ring-acc-main ring-offset-2 ring-offset-bg-200'} transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, 'acc-default')} />
        <label>
          <FormattedMessage id='acc-default' />
        </label>
      </div>
      <span className={`h-5 w-5 bg-green-icon-full rounded-full cursor-pointer ${selected === 1 && 'ring-1 ring-acc-main ring-offset-2 ring-offset-bg-200'} transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, 'acc-green')} />
      <span className={`h-5 w-5 bg-red-icon-full rounded-full cursor-pointer ${selected === 2 && 'ring-1 ring-acc-main ring-offset-2 ring-offset-bg-200'} transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, 'acc-red')} />
      <span className={`h-5 w-5 bg-orange-icon-full rounded-full cursor-pointer ${selected === 3 && 'ring-1 ring-acc-main ring-offset-2 ring-offset-bg-200'} transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, 'acc-orange')} />
      <span className={`h-5 w-5 bg-purple-icon-full rounded-full cursor-pointer ${selected === 4 && 'ring-1 ring-acc-main ring-offset-2 ring-offset-bg-200'} transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, 'acc-purple')} />
      <span className={`h-5 w-5 bg-yellow-900 rounded-full cursor-pointer ${selected === 5 && 'ring-1 ring-acc-main ring-offset-2 ring-offset-bg-200'} transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, 'acc-brown')} />
      <span className={`h-5 w-5 bg-yellow-window rounded-full cursor-pointer ${selected === 6 && 'ring-1 ring-acc-main ring-offset-2 ring-offset-bg-200'} transition-all duration-300 ease-in-out`} onClick={(event) => handleListItemClick(event, 'acc-yellow')} />
    </div>
  )
}

export default ChangeAccent
