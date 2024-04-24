import { IconBuilding, IconBuildingEstate, IconBuildingSkyscraper } from '@tabler/icons-react'

import { HoverEffect } from '../extends/CarHoverEffect'

const Timeline = () => {
  return (

    <ol className='relative border-s border-gray-icon-low'>
      <HoverEffect>
        <li className='mb-1 ms-4 pl-2 z-50 relative'>
          <div className='absolute flex items-center justify-center bg-bg-200 rounded-md -start-9 p-0.5'>
            <IconBuildingSkyscraper className='text-cinnamon-200' />
          </div>
          <time className='mb-1 text-sm font-normal leading-none text-main-text-low'>Mayo 2023 - Actualidad</time>
          <h3 className='text-lg font-bold text-main-text'>React Front End Developer en 2 Real People Solutions</h3>
          <p className='mb-4 text-base font-normal text-main-text-low'>Principal programador de interfaz en proyectos de la empresa como Tangerine Metrics y EverCargo. Gestión de proyectos con Bitbucket y Jira</p>
        </li>
        <li className='mb-1 ms-4 pl-2 z-50 relative'>
          <div className='absolute flex items-center justify-center bg-bg-200 rounded-md -start-9 p-0.5'>
            <IconBuildingEstate className='text-cinnamon-200' />
          </div>
          <time className='mb-1 text-sm font-normal leading-none text-main-text-low'>Enero 2022 - Diciembre 2022</time>
          <h3 className='text-lg font-bold text-main-text'>Mantenimiento Back-End end D.E.S.S</h3>
          <p className='mb-4 text-base font-normal text-main-text-low'>Apoyo administrativo en informática así como manutención de los programas SISAE-Siboltra y Feria del Empleo</p>
        </li>
        <li className='ms-4 pl-2 z-50 relative'>
          <div className='absolute flex items-center justify-center bg-bg-200 rounded-md -start-9 p-0.5'>
            <IconBuilding className='text-cinnamon-200' />
          </div>
          <time className='mb-1 text-sm font-normal leading-none text-main-text-low'>Junio 2019 - Septiembre 2019</time>
          <h3 className='text-lg font-bold text-main-text'>Back End Developer end DC Mayorista S.A de C.V</h3>
          <p className='mb-4 text-base font-normal text-main-text-low'>Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        </li>
      </HoverEffect>
    </ol>


  )
}

export default Timeline
