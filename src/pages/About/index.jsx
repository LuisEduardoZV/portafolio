import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'
import Divider from '../../components/ui-components/Divider'
import Timeline from '../../components/ui-components/Timeline'

import { IconCertificate, IconHandLoveYou, IconUserScan } from '@tabler/icons-react'
import { FormattedMessage } from 'react-intl'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <MainCard extraStyles='gap-0 sm:gap-5 h-full lg:flex-row lg:gap-5 lg:items-start'>

      <article className='max-w-full w-full h-full flex-1 sm:w-10/12 lg:w-1/2'>
        <header className='w-full h-fit pt-10 pb-5 px-5 sm:px-0 lg:px-5'>
          <h1 className='text-2xl font-bold text-main-text flex items-center gap-2'>
            <IconUserScan size={28} />
            <FormattedMessage id='about-title' />
          </h1>
        </header>
        <MainContentCard className='duration-300 ease-in-out p-0 px-6 py-8 gap-3'>
          <div className='w-full flex flex-col justify-between gap-4'>
            <h2 className='text-lg font-bold flex items-center gap-1'>
              <FormattedMessage id='about-hi' />
              <IconHandLoveYou size={18} />
            </h2>
            <p>
              <FormattedMessage
                id='about-info-1' values={{
                  name: <span className='font-bold'>Luis Zúñiga</span>,
                  degree: <span className='font-semibold text-cinnamon-200'><FormattedMessage id='about-degree' /></span>
                }}
              />
            </p>
            <p>
              <FormattedMessage
                id='about-info-2' values={{
                  special: <span className='font-semibold'><FormattedMessage id='about-special' /></span>,
                  expert: <span className='font-bold'>React</span>
                }}
              />
            </p>
            <p className='group'>
              <FormattedMessage
                id='about-info-3' values={{
                  iam: <span className='font-semibold'><FormattedMessage id='about-iam' /></span>,
                  loved: <span className='font-semibold text-cinnamon-200'><FormattedMessage id='about-loved' /></span>
                }}
              />
            </p>
          </div>
          <Divider />
          <div className='w-full'>
            <div className='pl-1 flex flex-col gap-6'>
              <h2 className='font-semibold'>
                <FormattedMessage id='about-habil' />
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

      <article className='max-w-full w-full h-full flex-1 mb-16 sm:w-10/12 sm:mb-10 lg:mb-0 lg:w-1/2'>
        <header className='w-full h-fit pt-10 pb-5 px-5 sm:px-0 lg:px-5'>
          <h1 className='text-2xl font-bold text-main-text flex items-center gap-2'>
            <IconCertificate size={28} />
            <FormattedMessage id='about-exp' />
          </h1>
        </header>
        <MainContentCard className='duration-300 ease-in-out p-0 px-6 py-8 gap-3'>
          <div className='flex flex-col gap-3'>
            <Timeline />
          </div>
          <Divider />
          <div className='w-full'>
            <div className='pl-1 flex flex-col gap-6'>
              <h2 className='font-semibold'>
                <FormattedMessage id='about-apt' />
              </h2>
              <div className='flex gap-6 w-full flex-wrap'>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <FormattedMessage id='hab-1' />
                </motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <FormattedMessage id='hab-2' />
                </motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <FormattedMessage id='hab-3' />
                </motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <FormattedMessage id='hab-4' />
                </motion.span>
                <motion.span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl text-main-text-low w-auto' whileHover={{ scale: 1.1, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <FormattedMessage id='hab-5' />
                </motion.span>
              </div>
            </div>
          </div>
        </MainContentCard>
      </article>

    </MainCard>
  )
}

export default About
