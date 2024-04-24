import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'
import Divider from '../../components/ui-components/Divider'
import Timeline from '../../components/ui-components/Timeline'

import { IconCertificate, IconHandLoveYou, IconUserScan } from '@tabler/icons-react'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <MainCard extraStyles='flex-row gap-5 h-full'>

      <article className='max-w-full w-1/2 h-full flex-1'>
        <header className='w-full h-fit pt-10 pb-5 px-5'>
          <h1 className='text-2xl font-bold text-main-text flex items-center gap-2'>
            <IconUserScan size={28} />
            Acerca de mi
          </h1>
        </header>
        <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out' p={0} px='px-6' py='py-8' gap='gap-3'>
          <div className='w-full flex flex-col justify-between gap-4'>
            <h2 className='text-lg font-bold flex items-center gap-1'>
              Hola!
              <IconHandLoveYou size={18} />
            </h2>
            <p>
              Mi nombre es <span className='font-semibold'>Luis Zúñiga</span>, tengo 24 años, soy técnico en programación, egresado orgullosamente del CECyT #9; e <span className='font-semibold text-cinnamon-200'>Ingeniero en Sistemas Computacionales</span>, egresado de ESCOM.
            </p>
            <p>
              Desde que entre al mundo de la programación siempre tuve una mayor tendencia hacia el <span className='font-semibold'>desarrollo Front-End</span> especializandome más en el uso de <span className='font-bold'>React</span>. También cuento con conocimientos básicos para el desarrollo Back-End.
            </p>
            <p className='group'>
              Soy una persona <span className='font-semibold'>apasionada</span> en lo que le gusta y <span className='font-semibold text-cinnamon-200'>programar en React me fascina</span>. Intento hacer mi trabajo lo más perfecto posible por lo que simepre estoy investigando y aprendiendo para cada vez hacerlo mejor.
            </p>
          </div>
          <Divider />
          <div className='w-full'>
            <div className='pl-1 flex flex-col gap-6'>
              <h2 className='font-semibold'>
                Habilidades
              </h2>
              <div className='flex gap-6 w-full flex-wrap'>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-sm text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>React</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Javascript</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>CSS</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>MUI</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Redux</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>API REST</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Node</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Java</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>MySQL</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Python</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>C</motion.span>
              </div>
            </div>
          </div>
        </MainContentCard>
      </article>

      <article className='max-w-full w-1/2 h-full flex-1'>
        <header className='w-full h-fit pt-10 pb-5 px-5'>
          <h1 className='text-2xl font-bold text-main-text flex items-center gap-2'>
            <IconCertificate size={28} />
            Experiencia
          </h1>
        </header>
        <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out' p={0} px='px-6' py='py-8' gap='gap-3'>
          <div className='flex flex-col gap-3'>
            <Timeline />
          </div>
          <Divider />
          <div className='w-full'>
            <div className='pl-1 flex flex-col gap-6'>
              <h2 className='font-semibold'>
                Aptitudes
              </h2>
              <div className='flex gap-6 w-full flex-wrap'>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Tabajo en equipo</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Creativo</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Inglés intermedio</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Autónomo</motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low w-auto' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>Autónomo</motion.span>
              </div>
            </div>
          </div>
        </MainContentCard>
      </article>

    </MainCard>
  )
}

export default About
