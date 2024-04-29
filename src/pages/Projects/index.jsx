import { FormattedMessage } from 'react-intl'

// project imports
import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'

import { IconBrandGithub, IconLink } from '@tabler/icons-react'

const Projects = () => {
  return (
    <MainCard>
      <header className='w-full h-fit py-10 px-5 sm:w-10/12 sm:px-0 lg:w-full'>
        <h1 className='text-2xl font-bold text-main-text'>
          <FormattedMessage id='menu-item-projects' />
        </h1>
      </header>
      <section className='flex justify-between gap-4 sm:w-10/12 sm:items-center sm:mt-16 sm:gap-32 sm:flex-nowrap sm:flex-col lg:flex-wrap lg:w-full lg:mt-5 lg:gap-20 transition-all duration-300 ease-in-out xl:flex-wrap'>
        <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative lg:max-h-72 sm:w-11/12 sm:relative group/card sm:max-h-64 lg:flex-row lg:hover:shadow-main-card'>
          <div className='h-full lg:max-h-max w-1/2 rounded-lg group/image peer sm:w-2/3 sm:absolute sm:max-h-44 sm:inset-0 sm:start-1/2 sm:-translate-x-1/2 sm:-top-20 sm:group-hover/card:-translate-y-10 sm:group-hover/card:translate-x-3 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.2] lg:group-hover/card:-translate-x-7 transition-all duration-300 ease-in-out lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg p-0 relative flex w-full h-full sm:group-hover/image:scale-100 sm:xl:group-hover/image:translate-x-0 lg:-translate-x-5 lg:group-hover/image:scale-[2] lg:group-hover/image:translate-x-20 xl:group-hover/image:scale-[1.3] xl:group-hover/card:scale-[1.55] xl:group-hover/card:translate-x-8'>
              <div className='bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute aspect-video lg:max-h-72 w-full h-full rounded-lg transition-all duration-300 ease-in-out lg:group-hover/image:bg-mainBlack' />
              <div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 w-full rounded-lg clip-bg-images-projects animate-formingImages transition-all duration-300 ease-in-out shadow lg:group-hover/image:bg-loginBlack' />
            </div>
          </div>
          <div className='flex flex-col w-full h-56 justify-between lg:group-hover/card:ml-5 sm:peer-hover:ml-0 sm:pt-24 sm:gap-3 sm:group-hover/card:pt-0 lg:pt-0 lg:group-hover/card:h-full transition-all duration-300 ease-in-out lg:h-max xl:group-hover/card:pl-28 xl:pl-5'>
            <a href='https://luiseduardozv.github.io/antennaApp/' target='_blank' className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
              Antenna App
              <IconLink className='text-acc-main' />
            </a>
            <p className='w-full transition-all duration-300 ease-in-out text-balance overflow-hidden truncate sm:max-h-11 sm:text-sm sm:group-hover/card:max-h-max lg:text-base lg:max-h-max'>
              Antenna App es una herramienta diseñada para la gestión eficiente de clientes y antenas. Ofrece funcionalidades para la creación de usuarios, vinculación de antenas y generación de reportes de consumo de datos. Dirigida especialmente a empresas de alquiler de equipos, proporciona una solución integral para optimizar sus operaciones.
            </p>
            <div className='flex flex-col justify-between sm:flex-row'>
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
        <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative lg:max-h-max sm:w-11/12 sm:relative group/card sm:max-h-64 lg:flex-row-reverse lg:hover:shadow-main-card'>
          <div className='h-full lg:max-h-max w-1/2 rounded-lg group/image peer sm:w-2/3 sm:absolute sm:max-h-44 sm:inset-0 sm:start-1/2 sm:-translate-x-1/2 sm:-top-20 sm:group-hover/card:-translate-y-10 sm:group-hover/card:-translate-x-full transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.3] lg:group-hover/card:translate-x-7 transition-all duration-300 ease-in-out relative lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg flex w-full sm:group-hover/image:scale-100 sm:xl:group-hover/image:translate-x-0 lg:translate-x-7 lg:group-hover/image:scale-[2] lg:group-hover/image:-translate-x-20 xl:group-hover/image:scale-[1.3] xl:group-hover/card:scale-[1.55] xl:group-hover/card:-translate-x-8'>
              <div className='bg-serverDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video lg:max-h-72 w-full rounded-lg transition-all duration-300 ease-in-out group-hover/image:scale-100 group-hover:bg-serverMain' />
              <div className='relative bg-serverMain bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 w-full rounded-lg clip-bg-images-projects animate-formingImagesSecond transition-all duration-300 ease-in-out shadow group-hover/image:bg-serverDefault' />
            </div>
          </div>
          <div className='flex flex-col w-full h-56 justify-between lg:group-hover/card:mr-5 transition-all duration-300 ease-in-out sm:peer-hover:ml-0 sm:pt-16 sm:gap-3 sm:group-hover/card:pt-0 sm:items-end lg:pt-0 lg:group-hover/card:h-full lg:h-max lg:group-hover/card:py-3 xl:group-hover/card:pr-28 xl:pr-5'>
            <h1 className='text-xl font-bold text-main-text flex items-center gap-3 sm:group-hover/card:pl-48 sm:text-right lg:group-hover/card:pl-0 transition-all duration-300 ease-in-out' rel='noreferrer'>
              Server Antenna App
            </h1>
            <p className='w-full transition-all duration-300 ease-in-out sm:text-sm sm:group-hover/card:max-h-max lg:text-base lg:max-h-max'>
              Servidor desarrollado para la lectura y escritura de datos del proyecto Antenna App. Cuenta con conexión a Base de Datos en PostgresSQL en Vercel ayudando a que permanezcan los datos.
            </p>
            <div className='flex flex-col justify-between sm:flex-row self-start w-full'>
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
        <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative lg:max-h-max sm:w-11/12 sm:relative group/card sm:max-h-64 lg:flex-row lg:hover:shadow-main-card'>
          <div className='h-full lg:max-h-max w-1/2 rounded-lg group/image peer sm:w-2/3 sm:absolute sm:max-h-44 sm:inset-0 sm:start-1/2 sm:-translate-x-1/2 sm:-top-20 sm:group-hover/card:-translate-y-10 sm:group-hover/card:translate-x-3 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.2] lg:group-hover/card:-translate-x-7 transition-all duration-300 ease-in-out lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg p-0 relative flex w-full h-full sm:group-hover/image:scale-100 sm:xl:group-hover/image:translate-x-0 lg:-translate-x-8 lg:group-hover/image:scale-[2] lg:group-hover/image:translate-x-20 xl:group-hover/image:scale-[1.3] xl:group-hover/card:scale-[1.55] xl:group-hover/card:translate-x-8'>
              <div className='bg-weatherMain bg-origin-border bg-center bg-cover bg-no-repeat absolute aspect-video lg:max-h-72 w-full h-full rounded-lg transition-all duration-300 ease-in-out lg:group-hover/image:bg-weatherHour ' />
              <div className='bg-weatherHour bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 w-full rounded-lg clip-bg-images-projects animate-formingImages transition-all duration-300 ease-in-out shadow lg:group-hover/image:bg-weatherMain' />
            </div>
          </div>
          <div className='flex flex-col w-full justify-between lg:group-hover/card:ml-5 sm:peer-hover:ml-0 sm:pt-24 sm:gap-3 sm:group-hover/card:pt-0 lg:pt-0 lg:group-hover/card:h-full transition-all duration-300 ease-in-out lg:h-max xl:group-hover/card:pl-28 xl:pl-5'>
            <a href='https://luiseduardozv.github.io/weather/' target='_blank' className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
              Weather App
              <IconLink className='text-acc-main' />
            </a>
            <p className='w-full transition-all duration-300 ease-in-out text-balance overflow-hidden truncate sm:max-h-11 sm:text-sm sm:group-hover/card:max-h-max lg:text-base lg:max-h-max'>
              Weather App muestra infomación climatológica en tu zona geografica o, si se desea, en cualquier parte del mundo que busque. Da información del día en curso así como de los siguientes 4 días mostrando datos relacionados a la temperatura, velocidad y dirección del viente, presión atmosferica y contaminación atmosférica.
            </p>
            <div className='flex flex-col justify-between sm:flex-row'>
              <div className='w-auto transition-all duration-300 ease-in-out'>
                <a href='https://github.com/LuisEduardoZV/weather' target='_blank' className='font-semibold text-main-text flex items-center gap-1' rel='noreferrer'>
                  <IconBrandGithub className='text-acc-main' size={20} />
                  GitHub
                </a>
              </div>
              <div className='flex flex-wrap gap-3 lg:gap-2'>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-blue-600 text-sm text-blue-600 font-semibold hover:shadow-md hover:shadow-blue-600/30 transition-all duration-300 ease-in'>React</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-red-600 text-sm text-red-600 font-semibold hover:shadow-md hover:shadow-red-600/30 transition-all duration-300 ease-in'>Ant Design</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-teal-600 text-sm text-teal-600 font-semibold hover:shadow-md hover:shadow-teal-600/30 transition-all duration-300 ease-in'>React Context</span>
              </div>
            </div>
          </div>
        </MainContentCard>
        <MainContentCard className='duration-300 ease-in-out flex-col gap-5 relative lg:max-h-max sm:w-11/12 sm:relative group/card sm:max-h-64 lg:flex-row-reverse lg:hover:shadow-main-card lg:mb-16'>
          <div className='h-full lg:max-h-max w-1/2 rounded-lg group/image peer sm:w-2/3 sm:absolute sm:max-h-44 sm:inset-0 sm:start-1/2 sm:-translate-x-1/2 sm:-top-20 sm:group-hover/card:-translate-y-10 sm:group-hover/card:-translate-x-full transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:translate-x-0'>
            <div className='lg:scale-[1.3] lg:group-hover/card:translate-x-7 transition-all duration-300 ease-in-out relative lg:group-hover/card:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg flex w-full sm:group-hover/image:scale-100 sm:xl:group-hover/image:translate-x-0 lg:translate-x-7 lg:group-hover/image:scale-[2] lg:group-hover/image:-translate-x-20 xl:group-hover/image:scale-[1.3] xl:group-hover/card:scale-[1.55] xl:group-hover/card:-translate-x-8'>
              <div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video lg:max-h-72 w-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out group-hover/image:scale-100 group-hover:bg-mainBlack' />
              <div className='relative bg-serverMain bg-origin-border bg-center bg-cover bg-no-repeat aspect-video lg:max-h-72 w-full rounded-lg clip-bg-images-projects animate-formingImagesSecond cursor-pointer transition-all duration-300 ease-in-out shadow group-hover/image:bg-loginBlack' />
            </div>
          </div>
          <div className='flex flex-col w-full h-56 justify-between lg:group-hover/card:mr-5 transition-all duration-300 ease-in-out sm:peer-hover:ml-0 sm:pt-16 sm:gap-3 sm:group-hover/card:pt-0 sm:items-end lg:pt-0 lg:group-hover/card:h-full lg:h-max xl:group-hover/card:pr-28 xl:pr-5'>
            <h1 className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
              Marvel's Project
            </h1>
            <p className='w-full transition-all duration-300 ease-in-out sm:text-sm lg:text-base lg:max-h-max'>
              Página web de busqueda relacionada a comics del universo Marvel. Permite busquedas desde personajes, cómics en específico y series/sagas. Da información específica de la busqueda y muestra contenido relacionado a la misma.
            </p>
            <div className='flex flex-col justify-between sm:flex-row self-start w-full'>
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
        </MainContentCard>
      </section>
    </MainCard>
  )
}

export default Projects
