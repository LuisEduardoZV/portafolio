import { FormattedMessage } from 'react-intl'

// project imports
import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'

import { IconBrandGithub, IconLink } from '@tabler/icons-react'

const Projects = () => {
  return (
    <MainCard>
      <header className='w-full h-fit py-10 px-5 sm:w-10/12 sm:px-0 lg:w-full hidden sm:flex'>
        <h1 className='text-2xl font-bold text-main-text'>
          <FormattedMessage id='menu-item-projects' />
        </h1>
      </header>
      <section className='flex w-full justify-between gap-y-28 mt-32 sm:w-10/12 sm:items-center sm:mt-16 sm:gap-40 md:gap-48 sm:flex-nowrap md:mt-24 flex-col lg:flex-wrap lg:w-full lg:mt-5 lg:gap-20 transition-all duration-300 ease-in-out xl:flex-wrap'>
        <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative max-h-min lg:max-h-72 2xl:max-h-60 sm:w-11/12 sm:relative group/card sm:max-h-72 md:max-h-64 lg:flex-row lg:hover:shadow-main-card'>
          <div className='h-full lg:max-h-max w-full max-w-[83%] -mt-24 ml-28 sm:-mt-0 sm:ml-0 rounded-lg group/image peer sm:w-4/6 md:w-[60%] lg:w-2/3 sm:absolute sm:start-1/2 sm:-top-32 sm:max-h-44 md:max-h-52 md:inset-0 md:start-1/2 md:-translate-x-1/2 md:-top-28 md:group-hover/card:-translate-y-10 md:group-hover/card:translate-x-3 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.2] 2xl:scale-[1.1] lg:group-hover/card:-translate-x-7 transition-all duration-300 ease-in-out lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg p-0 relative flex w-full h-full md:group-hover/image:scale-100 md:xl:group-hover/image:translate-x-0 lg:-translate-x-8 lg:group-hover/image:scale-[1.5] lg:group-hover/image:translate-x-0 xl:group-hover/image:scale-[1.5] xl:group-hover/card:scale-[1.55] xl:group-hover/card:translate-x-8 2xl:group-hover/image:scale-[1.3] 2xl:group-hover/card:scale-[1.3] 2xl:group-hover/card:translate-x-16'>
              <div className='bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute aspect-video lg:max-h-72 2xl:max-h-60 w-full h-full rounded-lg transition-all duration-300 ease-in-out group-hover/image:bg-mainBlack' />
              <div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 2xl:max-h-60 w-full rounded-lg clip-bg-images-projects animate-formingImages transition-all duration-300 ease-in-out shadow group-hover/image:bg-loginBlack' />
            </div>
          </div>
          <div className='flex flex-col w-full sm:pt-4 md:h-56 h-min justify-between lg:peer-hover:ml-16 lg:group-hover/image:ml-16 md:peer-hover:pl-0 xl:peer-hover:ml-0 md:pt-24 gap-3 md:group-hover/card:pt-0 lg:pt-0 lg:group-hover/card:h-full transition-all duration-300 ease-in-out lg:h-max xl:group-hover/card:pl-28 xl:pl-5 2xl:pl-0 2xl:gap-5 2xl:group-hover/card:gap-3'>
            <a href='https://luiseduardozv.github.io/antennaApp/' target='_blank' className='text-xl md:text-2xl lg:text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
              Antenna App
              <IconLink className='text-acc-main' />
            </a>
            <p className='w-full transition-all duration-300 ease-in-out sm:text-sm md:text-clip md:overflow-hidden h-max md:max-h-[40%] md:text-base group-hover/card:max-h-max lg:text-base lg:max-h-max'>
              <FormattedMessage id='proj-info-1' />
            </p>
            <div className='flex justify-between flex-row'>
              <div className='w-auto transition-all duration-300 ease-in-out'>
                <a href='https://github.com/LuisEduardoZV/antennaApp' target='_blank' className='font-semibold text-main-text flex items-center gap-1' rel='noreferrer'>
                  <IconBrandGithub className='text-acc-main' size={20} />
                  GitHub
                </a>
              </div>
              <div className='flex flex-wrap gap-3'>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-cyan-600 text-sm text-cyan-600 font-semibold hover:shadow-md hover:shadow-cyan-600/30 transition-all duration-300 ease-in'>React</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-blue-600 text-sm text-blue-600 font-semibold hover:shadow-md hover:shadow-blue-600/30 transition-all duration-300 ease-in'>MUI</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-purple-600 text-sm text-purple-600 font-semibold hover:shadow-md hover:shadow-purple-600/30 transition-all duration-300 ease-in'>Redux</span>
              </div>
            </div>
          </div>
        </MainContentCard>
        <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative lg:max-h-max 2xl:max-h-60 md:w-11/12 md:relative group/card md:max-h-64 lg:flex-row-reverse lg:hover:shadow-main-card'>
          <div className='h-full lg:max-h-max w-full max-w-[83%] -mt-24 -ml-28 sm:-mt-0 sm:-ml-0 rounded-lg group/image peer sm:w-2/3 md:w-[60%] lg:w-2/3 sm:absolute sm:-start-[11%] sm:-top-28 sm:max-h-44 md:max-h-52 md:inset-0 md:start-1/2 md:-translate-x-1/2 md:-top-36 md:group-hover/card:translate-y-3 md:group-hover/card:-translate-x-full transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.2] 2xl:scale-[1.1] lg:group-hover/card:translate-x-7 transition-all duration-300 ease-in-out relative lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg flex w-full md:group-hover/image:scale-100 md:xl:group-hover/image:translate-x-0 lg:translate-x-7 lg:group-hover/image:scale-[1.5] lg:group-hover/image:-translate-x-0 xl:group-hover/image:scale-[1.5] xl:group-hover/card:scale-[1.55] xl:group-hover/card:-translate-x-8 2xl:group-hover/image:scale-[1.3] 2xl:group-hover/card:scale-[1.3] 2xl:group-hover/card:-translate-x-16'>
              <div className='bg-serverDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video lg:max-h-72 2xl:max-h-60 w-full rounded-lg transition-all duration-300 ease-in-out group-hover/image:scale-100 group-hover:bg-serverMain' />
              <div className='relative bg-serverMain bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 2xl:max-h-60 w-full rounded-lg clip-bg-images-projects animate-formingImagesSecond transition-all duration-300 ease-in-out shadow group-hover/image:bg-serverDefault' />
            </div>
          </div>
          <div className='flex flex-col w-full h-56 justify-between sm:pt-4 lg:peer-hover:pr-16 xl:peer-hover:pl-0 transition-all duration-300 ease-in-out md:peer-hover:ml-0 md:pt-16 gap-3 md:group-hover/card:pt-0 md:items-end lg:pt-0 lg:group-hover/card:h-full lg:h-max lg:group-hover/card:py-3 xl:group-hover/card:pr-28 xl:pr-5 2xl:pr-0 2xl:gap-5 2xl:group-hover/card:gap-3'>
            <h1 className='text-xl md:text-2xl lg:text-xl font-bold text-main-text flex items-center gap-3 sm:justify-end md:justify-start md:group-hover/card:pl-48 md:text-right lg:group-hover/card:pl-0 transition-all duration-300 ease-in-out' rel='noreferrer'>
              Server Antenna App
            </h1>
            <p className='w-full transition-all duration-300 ease-in-out sm:text-sm md:text-base md:group-hover/card:max-h-max lg:text-base lg:max-h-max'>
              <FormattedMessage id='proj-info-2' />
            </p>
            <div className='flex justify-between flex-row self-start w-full'>
              <div className='w-auto transition-all duration-300 ease-in-out '>
                <a href='https://github.com/LuisEduardoZV/server-antennaApp' target='_blank' className='font-semibold text-main-text flex items-center gap-1' rel='noreferrer'>
                  <IconBrandGithub className='text-acc-main' size={20} />
                  GitHub
                </a>
              </div>
              <div className='flex flex-wrap gap-3'>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-yellow-600 text-sm text-yellow-600 font-semibold hover:shadow-md hover:shadow-yellow-600/30 transition-all duration-300 ease-in'>Node.js</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-green-600 text-sm text-green-600 font-semibold hover:shadow-md hover:shadow-green-600/30 transition-all duration-300 ease-in'>Express</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-sky-600 text-sm text-sky-600 font-semibold hover:shadow-md hover:shadow-sky-600/30 transition-all duration-300 ease-in'>Postgres</span>
              </div>
            </div>
          </div>
        </MainContentCard>
        <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative mb-20 lg:max-h-max md:w-11/12 md:relative group/card sm:max-h-72 md:max-h-64 lg:flex-row lg:hover:shadow-main-card'>
          <div className='h-full lg:max-h-max w-full max-w-[83%] -mt-24 ml-28 sm:-mt-0 sm:ml-0 rounded-lg group/image peer sm:w-[60%] lg:w-2/3 sm:absolute sm:max-h-44 sm:-top-32 sm:start-1/2 md:max-h-52 md:inset-0 md:start-1/2 md:-translate-x-1/2 md:-top-28 md:group-hover/card:-translate-y-10 md:group-hover/card:translate-x-3 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.2] 2xl:scale-[1.1] lg:group-hover/card:-translate-x-7 transition-all duration-300 ease-in-out lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg p-0 relative flex w-full h-full md:group-hover/image:scale-100 md:xl:group-hover/image:translate-x-0 lg:-translate-x-8 lg:group-hover/image:scale-[1.5] lg:group-hover/image:translate-x-0 xl:group-hover/image:scale-[1.5] xl:group-hover/card:scale-[1.55] xl:group-hover/card:translate-x-8 2xl:group-hover/image:scale-[1.3] 2xl:group-hover/card:scale-[1.3] 2xl:group-hover/card:translate-x-16'>
              <div className='bg-weatherMain bg-origin-border bg-center bg-cover bg-no-repeat absolute aspect-video lg:max-h-72 2xl:max-h-60 w-full h-full rounded-lg transition-all duration-300 ease-in-out group-hover/image:bg-weatherHour ' />
              <div className='bg-weatherHour bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 2xl:max-h-60 w-full rounded-lg clip-bg-images-projects animate-formingImages transition-all duration-300 ease-in-out shadow group-hover/image:bg-weatherMain' />
            </div>
          </div>
          <div className='flex flex-col w-full justify-between md:h-56 lg:peer-hover:pl-16 xl:peer-hover:ml-0 md:peer-hover:ml-0 sm:pt-4 md:pt-24 gap-3 sm:gap-4 md:gap-3 md:group-hover/card:pt-0 lg:pt-0 lg:group-hover/card:h-full transition-all duration-300 ease-in-out lg:h-max xl:group-hover/card:pl-28 xl:pl-5 2xl:pl-0 2xl:gap-5 2xl:group-hover/card:gap-3'>
            <a href='https://luiseduardozv.github.io/weather/' target='_blank' className='text-xl md:text-2xl lg:text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
              Weather App
              <IconLink className='text-acc-main' />
            </a>
            <p className='w-full transition-all duration-300 ease-in-out md:overflow-hidden md:text-clip md:max-h-[40%] sm:text-sm md:text-base md:group-hover/card:max-h-max lg:text-base lg:max-h-max'>
              <FormattedMessage id='proj-info-3' />
            </p>
            <div className='flex justify-between flex-row'>
              <div className='w-auto transition-all duration-300 ease-in-out flex items-center'>
                <a href='https://github.com/LuisEduardoZV/weather' target='_blank' className='font-semibold text-main-text flex items-center gap-1' rel='noreferrer'>
                  <IconBrandGithub className='text-acc-main' size={20} />
                  GitHub
                </a>
              </div>
              <div className='flex flex-wrap pl-3 md:pl-0 gap-3 lg:gap-2'>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-blue-600 text-sm text-blue-600 font-semibold hover:shadow-md hover:shadow-blue-600/30 transition-all duration-300 ease-in'>React</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-red-600 text-sm text-red-600 font-semibold hover:shadow-md hover:shadow-red-600/30 transition-all duration-300 ease-in'>Ant Design</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-teal-600 text-sm text-teal-600 font-semibold hover:shadow-md hover:shadow-teal-600/30 transition-all duration-300 ease-in'>React Context</span>
              </div>
            </div>
          </div>
        </MainContentCard>
        {/* <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative mb-20 sm:mb-0 lg:max-h-max 2xl:max-h-60 sm:w-11/12 sm:relative group/card sm:max-h-64 lg:flex-row-reverse lg:hover:shadow-main-card lg:mb-16'>
          <div className='h-full lg:max-h-max w-5/6 -mt-24 -ml-28 sm:-mt-0 sm:-ml-0 rounded-lg group/image peer sm:w-2/3 sm:absolute sm:max-h-44 sm:inset-0 sm:start-1/2 sm:-translate-x-1/2 sm:-top-20 sm:group-hover/card:-translate-y-10 sm:group-hover/card:-translate-x-full transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.3] 2xl:scale-[1] lg:group-hover/card:translate-x-7 transition-all duration-300 ease-in-out relative lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg flex w-full sm:group-hover/image:scale-100 sm:xl:group-hover/image:translate-x-0 lg:translate-x-7 lg:group-hover/image:scale-[2] lg:group-hover/image:-translate-x-20 xl:group-hover/image:scale-[1.3] xl:group-hover/card:scale-[1.55] xl:group-hover/card:-translate-x-8 2xl:group-hover/image:scale-[1.3] 2xl:group-hover/card:scale-[1.3] 2xl:group-hover/card:-translate-x-16'>
              <div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video lg:max-h-72 2xl:max-h-60 w-full rounded-lg transition-all duration-300 ease-in-out group-hover/image:scale-100 group-hover:bg-mainBlack' />
              <div className='relative bg-serverMain bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 2xl:max-h-60 w-full rounded-lg clip-bg-images-projects animate-formingImagesSecond transition-all duration-300 ease-in-out shadow group-hover/image:bg-loginBlack' />
            </div>
          </div>
          <div className='flex flex-col w-full h-56 justify-between lg:group-hover/card:mr-5 transition-all duration-300 ease-in-out sm:peer-hover:ml-0 sm:pt-16 gap-3 sm:group-hover/card:pt-0 sm:items-end lg:pt-0 lg:group-hover/card:h-full lg:h-max xl:group-hover/card:pr-28 xl:pr-5 2xl:pr-0 2xl:gap-5 2xl:group-hover/card:gap-3'>
            <h1 className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
              Marvel's Project
            </h1>
            <p className='w-full transition-all duration-300 ease-in-out sm:text-sm lg:text-base lg:max-h-max'>
              Página web de busqueda relacionada a comics del universo Marvel. Permite busquedas desde personajes, cómics en específico y series/sagas. Da información específica de la busqueda y muestra contenido relacionado a la misma.
            </p>
            <div className='flex justify-between flex-row self-start w-full'>
              <div className='w-auto transition-all duration-300 ease-in-out'>
                <a href='https://github.com/LuisEduardoZV/server-antennaApp' target='_blank' className='font-semibold text-main-text flex items-center gap-1' rel='noreferrer'>
                  <IconBrandGithub className='text-acc-main' size={20} />
                  GitHub
                </a>
              </div>
              <div className='flex flex-wrap gap-3'>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-yellow-600 text-sm text-yellow-600 font-semibold hover:shadow-md hover:shadow-yellow-600/30 transition-all duration-300 ease-in'>Node.js</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-green-600 text-sm text-green-600 font-semibold hover:shadow-md hover:shadow-green-600/30 transition-all duration-300 ease-in'>Express</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-sky-600 text-sm text-sky-600 font-semibold hover:shadow-md hover:shadow-sky-600/30 transition-all duration-300 ease-in'>Postgres</span>
              </div>
            </div>
          </div>
  </MainContentCard> */}
      </section>
    </MainCard>
  )
}

export default Projects
