import { IconBuilding, IconBuildingEstate, IconBuildingSkyscraper } from '@tabler/icons-react'

import { FormattedMessage } from 'react-intl'
import { HoverEffect } from '../extends/CarHoverEffect'

const Timeline = () => {
  return (

    <ol className='relative border-s border-gray-icon-low'>
      <HoverEffect>
        <li className='mb-1 ms-4 pl-2 z-50 relative'>
          <div className='absolute flex items-center justify-center bg-bg-200 rounded-md -start-9 p-0.5'>
            <IconBuildingSkyscraper className='text-cinnamon-200' />
          </div>
          <time className='mb-1 text-sm font-normal leading-none text-main-text-low'>
            <FormattedMessage id='job-info-time-1' />
          </time>
          <h3 className='text-lg font-bold text-main-text'>
            <FormattedMessage id='job-info-title-1' />
          </h3>
          <p className='mb-4 text-base font-normal text-main-text-low'>
            <FormattedMessage id='job-info-desc-1' />
          </p>
        </li>
        <li className='mb-1 ms-4 pl-2 z-50 relative'>
          <div className='absolute flex items-center justify-center bg-bg-200 rounded-md -start-9 p-0.5'>
            <IconBuildingEstate className='text-cinnamon-200' />
          </div>
          <time className='mb-1 text-sm font-normal leading-none text-main-text-low'>
            <FormattedMessage id='job-info-time-2' />
          </time>
          <h3 className='text-lg font-bold text-main-text'>
            <FormattedMessage id='job-info-title-2' />
          </h3>
          <p className='mb-4 text-base font-normal text-main-text-low'>
            <FormattedMessage id='job-info-desc-2' />
          </p>
        </li>
        <li className='ms-4 pl-2 z-50 relative'>
          <div className='absolute flex items-center justify-center bg-bg-200 rounded-md -start-9 p-0.5'>
            <IconBuilding className='text-cinnamon-200' />
          </div>
          <time className='mb-1 text-sm font-normal leading-none text-main-text-low'>
            <FormattedMessage id='job-info-time-3' />
          </time>
          <h3 className='text-lg font-bold text-main-text'>
            <FormattedMessage id='job-info-title-3' />
          </h3>
          <p className='mb-4 text-base font-normal text-main-text-low'>
            <FormattedMessage id='job-info-desc-3' />
          </p>
        </li>
      </HoverEffect>
    </ol>


  )
}

export default Timeline
