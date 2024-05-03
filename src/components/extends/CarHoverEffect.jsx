/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { cloneElement, memo, useMemo, useState } from 'react'
import { mergeClasses } from '../../utils/mergeClasses'


const Card = ({ Item, active, idx, hoverClasses, containerClasses, setHoveredIndex, hoveredIndex }) => {
  const hoverDefClass = useMemo(() => `absolute inset-0 start-4 h-full w-[98%] ${active ? 'bg-acc-main shadow-md' : 'bg-bg-100'} block rounded-xl z-50`, [active])

  return (
    <div
      key={idx}
      className={mergeClasses(`relative group block p-2 h-full w-full ${(idx === 1 || idx === 5) && 'mb-6'}`, containerClasses)}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {(hoveredIndex === idx || active) && (
          <motion.span
            className={mergeClasses(hoverDefClass, hoverClasses)}
            layoutId='hoverBackground'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 }
            }}
          />
        )}
      </AnimatePresence>
      {Item}
    </div>
  )
}

const HoverEffect = memo(({ children, hoverClasses, containerClasses }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const items = useMemo(() => {
    if (!Array.isArray(children)) return [children]
    return children
  }, [children])

  return (
    <>
      {items.map((item, idx) => {
        const Item = cloneElement(item, {})
        const active = Item?.props?.active
        return (
          <Card key={idx} Item={Item} active={active} idx={idx} hoverClasses={hoverClasses} containerClasses={containerClasses} setHoveredIndex={setHoveredIndex} hoveredIndex={hoveredIndex} />
        )
      })}
    </>
  )
})

HoverEffect.displayName = 'HoverEffect'

export { HoverEffect }

