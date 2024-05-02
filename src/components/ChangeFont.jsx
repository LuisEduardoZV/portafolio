import { useEffect, useMemo, useState } from 'react'
import useConfig from '../hooks/useConfig'

// import projects
import InputRadio from './ui-components/InputRadio'
import InputSwitch from './ui-components/InputSwitch'

const ChangeFont = () => {
  const { font, onChangeFont } = useConfig()

  const [, setFontSelected] = useState(font)

  const handleListItemClick = (event, fnt) => {
    setFontSelected(fnt)
    onChangeFont(fnt)
  }

  const movil = useMemo(() => (window.screen.width < 576), [])

  useEffect(() => {
    setFontSelected(font)
  }, [font])

  return (
    <div className='flex w-fit h-fit gap-x-3 items-center justify-center'>
      {movil
        ? (
          <InputSwitch handleListItemClick={(event) => handleListItemClick(event, !font)} defChecked={!font} />
          )
        : (
          <>
            <InputRadio handleListItemClick={handleListItemClick} title='font-bold' value={false} defChecked={!font} name='font' />
            <InputRadio handleListItemClick={handleListItemClick} title='font-normal' value defChecked={font} name='font' />
          </>
          )}
    </div>
  )
}

export default ChangeFont
