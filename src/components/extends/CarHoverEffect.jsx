/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

export const HoverEffect = ({ children }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const items = useMemo(() => {
    if (!Array.isArray(children)) return [children]
    return children
  }, [children])

  return (
    <>
      {items.map((item, idx) => (
        <div
          key={idx}
          className='relative group block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 start-4 h-full w-[98%] bg-bg-100 block rounded-xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
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
          {item}
        </div>
      ))}
    </>
  )
}
