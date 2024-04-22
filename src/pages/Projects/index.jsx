import { FormattedMessage } from 'react-intl'

// project imports
import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'

import { IconBrandGithub, IconLink } from '@tabler/icons-react'

const Projects = () => {
  return (
    <>
      <MainCard>
        <header className='w-full h-fit py-10 px-5'>
          <h1 className='text-2xl font-bold text-main-text'>
            <FormattedMessage id='menu-item-projects' />
          </h1>
        </header>
        <section className='flex flex-wrap justify-between gap-4'>
          <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out' flexDirection='flex-row' gap='gap-5' position='relative' maxHeight='max-h-60'>
            <div className='h-full max-h-60 w-1/2 rounded-lg group peer'>
              <div className='group-hover:scale-150 group-hover:translate-x-28 transition-all duration-300 ease-in-out group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg p-0 relative flex w-full h-full'>
                <div className='bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute aspect-video max-h-60 w-full h-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:bg-mainBlack' />
                <div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-60 w-full rounded-lg cursor-pointer clip-bg-images-projects animate-formingImages transition-all duration-300 ease-in-out shadow group-hover:bg-loginBlack' />
              </div>
            </div>
            <div className='flex flex-col w-full h-56 justify-between peer-hover:ml-48 transition-all duration-300 ease-in-out'>
              <a href='https://luiseduardozv.github.io/antennaApp/' target='_blank' className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
                Antenna App
                <IconLink className='text-acc-main' />
              </a>
              <p className='w-full transition-all duration-300 ease-in-out'>
                Antenna App es una herramienta diseñada para la gestión eficiente de clientes y antenas. Ofrece funcionalidades para la creación de usuarios, vinculación de antenas y generación de reportes de consumo de datos. Dirigida especialmente a empresas de alquiler de equipos, proporciona una solución integral para optimizar sus operaciones.
              </p>
              <div className='w-full transition-all duration-300 ease-in-out'>
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
          </MainContentCard>
          <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out' flexDirection='flex-row-reverse' gap='gap-5' position='relative' maxHeight='max-h-60'>
            <div className='h-full max-h-60 w-1/2 rounded-lg group peer'>
              <div className='group-hover:scale-150 group-hover:-translate-x-28 transition-all duration-300 ease-in-out relative group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg flex w-full h-full'>
                <div className='bg-serverDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video max-h-60 w-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:bg-serverMain' />
                <div className='relative bg-serverMain bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-60 w-full rounded-lg clip-bg-images-projects animate-formingImagesSecond cursor-pointer transition-all duration-300 ease-in-out shadow group-hover:bg-serverDefault' />
              </div>
            </div>
            <div className='flex flex-col w-full h-56 justify-between peer-hover:mr-48 transition-all duration-300 ease-in-out'>
              <h1 className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
                Server Antenna App
              </h1>
              <p className='w-full transition-all duration-300 ease-in-out'>
                Servidor desarrollado para la lectura y escritura de datos del proyecto Antenna App. Cuenta con conexión a Base de Datos en PostgresSQL en Vercel ayudando a que permanezcan los datos.
              </p>
              <div className='w-full transition-all duration-300 ease-in-out'>
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
          </MainContentCard>
          <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out' flexDirection='flex-row' gap='gap-5' position='relative' maxHeight='max-h-60'>
            <div className='h-full max-h-60 w-1/2 rounded-lg group peer'>
              <div className='group-hover:scale-150 group-hover:translate-x-28 transition-all duration-300 ease-in-out group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg p-0 relative flex w-full h-full'>
                <div className='bg-weatherMain bg-origin-border bg-center bg-cover bg-no-repeat absolute aspect-video max-h-60 w-full h-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:bg-weatherHour' />
                <div className='bg-weatherHour bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-60 w-full rounded-lg clip-bg-images-projects-alter animate-formingImagesAlter cursor-pointer transition-all duration-300 ease-in-out shadow group-hover:bg-weatherMain' />
              </div>
            </div>
            <div className='flex flex-col w-full h-56 justify-between peer-hover:ml-48 transition-all duration-300 ease-in-out'>
              <a href='https://luiseduardozv.github.io/weather/' target='_blank' className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
                Weather App
                <IconLink className='text-acc-main' />
              </a>
              <p className='w-full transition-all duration-300 ease-in-out'>
                Weather App muestra infomación climatológica en tu zona geografica o, si se desea, en cualquier parte del mundo que busque. Da información del día en curso así como de los siguientes 4 días mostrando datos relacionados a la temperatura, velocidad y dirección del viente, presión atmosferica y contaminación atmosférica.
              </p>
              <div className='w-full transition-all duration-300 ease-in-out'>
                <a href='https://github.com/LuisEduardoZV/weather' target='_blank' className='font-semibold text-main-text flex items-center gap-1' rel='noreferrer'>
                  <IconBrandGithub className='text-acc-main' size={20} />
                  GitHub
                </a>
              </div>
              <div className='flex flex-wrap gap-3'>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-blue-600 text-sm text-blue-600 font-semibold hover:shadow-md hover:shadow-blue-600/30 transition-all duration-300 ease-in'>React</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-red-600 text-sm text-red-600 font-semibold hover:shadow-md hover:shadow-red-600/30 transition-all duration-300 ease-in'>Ant Design</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-teal-600 text-sm text-teal-600 font-semibold hover:shadow-md hover:shadow-teal-600/30 transition-all duration-300 ease-in'>React Context</span>
              </div>
            </div>
          </MainContentCard>
          <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out' flexDirection='flex-row-reverse' gap='gap-5' position='relative' maxHeight='max-h-60'>
            <div className='h-full max-h-60 w-1/2 rounded-lg group peer'>
              <div className='group-hover:scale-150 group-hover:-translate-x-28 transition-all duration-300 ease-in-out relative group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg flex w-full h-full'>
                <div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video max-h-60 w-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:bg-mainBlack' />
                <div className='relative bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-60 w-full rounded-lg form animate-formingImagesSecond cursor-pointer transition-all duration-300 ease-in-out shadow group-hover:bg-loginBlack' />
              </div>
            </div>
            <div className='flex flex-col w-full h-56 justify-between peer-hover:mr-48 transition-all duration-300 ease-in-out'>
              <h1 className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
                Marvel's Project
              </h1>
              <p className='w-full transition-all duration-300 ease-in-out'>
                Página web de busqueda relacionada a comics del universo Marvel. Permite busquedas desde personajes, cómics en específico y series/sagas. Da información específica de la busqueda y muestra contenido relacionado a la misma.
              </p>
              <div className='w-full transition-all duration-300 ease-in-out'>
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
          </MainContentCard>
        </section>
      </MainCard>
    </>
  )
}

export default Projects
