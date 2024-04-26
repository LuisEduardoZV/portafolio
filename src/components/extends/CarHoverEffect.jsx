/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { cloneElement, useMemo, useState } from 'react'
import { mergeClasses } from '../../utils/mergeClasses'

export const HoverEffect = ({ children, hoverClasses, containerClasses, inMenu = false, path }) => {
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
          <div
            key={idx}
            className={mergeClasses(`relative group block p-2 h-full w-full ${(inMenu && (idx === 1 || idx === 5)) && 'mb-7'}`, containerClasses)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {(hoveredIndex === idx || active) && (
                <motion.span
                  className={mergeClasses(`absolute inset-0 start-4 h-full w-[98%] ${active ? 'bg-acc-main shadow-md' : 'bg-bg-200'} block rounded-xl`, hoverClasses)}
                  layoutId='hoverBackground'
                  initial={{ opacity: 0, backgroundColor: 'bg-bg-200' }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 }
                  }}
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
      })}
    </>
  )
}
