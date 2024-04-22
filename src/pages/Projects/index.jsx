import { FormattedMessage } from 'react-intl'

// project imports
import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'

import { IconLink } from '@tabler/icons-react'

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
          <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out' flexDirection='flex-row' gap='gap-5' position='relative' maxHeight='max-h-56'>
            <div className='h-full max-h-56 w-1/2 rounded-lg group peer'>
              <div className='group-hover:scale-150 group-hover:translate-x-28 transition-all duration-300 ease-in-out group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg p-0 relative flex w-full h-full'>
                <div className='bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute aspect-video max-h-56 w-full h-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:bg-mainBlack' />
                <div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-56 w-full rounded-lg form animate-formingImages cursor-pointer transition-all duration-300 ease-in-out shadow group-hover:bg-loginBlack' />
              </div>
            </div>
            <div className='flex flex-col w-full h-52 justify-between peer-hover:ml-48 transition-all duration-300 ease-in-out'>
              <a href='https://luiseduardozv.github.io/antennaApp/' target='_blank' className='text-xl font-bold text-main-text flex items-center gap-3' rel='noreferrer'>
                Antenna App
                <IconLink className='text-blue-600' />
              </a>
              <p className='w-full transition-all duration-300 ease-in-out'>
                Antenna App es una herramienta diseñada para la gestión eficiente de clientes y antenas. Ofrece funcionalidades para la creación de usuarios, vinculación de antenas y generación de reportes de consumo de datos. Dirigida especialmente a empresas de alquiler de equipos, proporciona una solución integral para optimizar sus operaciones.
              </p>
              <div className='flex flex-wrap gap-3'>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-cyan-600 text-sm text-cyan-600 font-semibold hover:shadow-md hover:shadow-cyan-600/30 transition-all duration-300 ease-in'>React</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-blue-600 text-sm text-blue-600 font-semibold hover:shadow-md hover:shadow-blue-600/30 transition-all duration-300 ease-in'>MUI</span>
                <span className='bg-transparent px-2 py-0 rounded-full border border-solid border-purple-600 text-sm text-purple-600 font-semibold hover:shadow-md hover:shadow-purple-600/30 transition-all duration-300 ease-in'>Redux</span>
              </div>
            </div>
          </MainContentCard>
        </section>
      </MainCard>
    </>
  )
}

export default Projects
