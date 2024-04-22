import MainCard from '../../components/Cards/MainCard'
import MainContentCard from '../../components/Cards/MainContentCard'
import Divider from '../../components/ui-components/Divider'

const About = () => {
  return (
    <MainCard>
      <header className='w-full h-fit py-10 px-5'>
        <h1 className='text-2xl font-bold text-main-text'>
          Información general
        </h1>
      </header>
      <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out'>
        <div className='w-full flex flex-col justify-between px-2 py-5 gap-3'>
          <h2 className='font-semibold'>
            Acerca de mi
          </h2>
          <p>Commodo aliqua consequat labore quis dolore.Eiusmod minim cupidatat excepteur velit velit et cupidatat enim consectetur commodo adipisicing irure aliquip.Ut voluptate pariatur incididunt ex.Ipsum duis consectetur elit reprehenderit incididunt ipsum eiusmod voluptate cupidatat aliquip aliqua proident ex excepteur.</p>
          <p>
            Mollit non officia ea qui ullamco culpa pariatur commodo.Incididunt reprehenderit elit quis non eiusmod proident pariatur.Cupidatat reprehenderit ullamco ullamco ad officia magna esse sunt laborum sunt ut.Duis ea reprehenderit consectetur do amet et veniam dolore.Mollit nostrud tempor sunt deserunt fugiat enim sit ipsum.
          </p>
          <p>Eiusmod mollit excepteur id cupidatat nulla laborum et cupidatat sit reprehenderit.Mollit aliquip tempor incididunt sunt sunt mollit cillum consequat.Nulla anim sunt officia minim laboris ad nostrud occaecat elit ex cillum.</p>
        </div>
        <Divider />
        <div className='w-full flex justify-between px-2 py-5 gap-6'>
          <div className='w-1/2 pl-1 flex flex-col gap-6'>
            <h2 className='font-semibold'>
              Habilidades
            </h2>
            <div className='flex gap-10 w-full flex-wrap'>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>React</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>Redux</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>Javascript</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>Node</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>CSS</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>Git</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>Python</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>Java</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>MySQL</span>
              <span className='bg-bg-100 py-2 px-4 rounded-sm shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:font-semibold text-main-text-low'>MUI</span>
            </div>
          </div>
          <div className='w-1/2 pl-1 flex flex-col gap-6'>
            <h2 className='font-semibold'>
              Habilidades
            </h2>
            <div className='flex gap-10 w-full flex-wrap'>
              <span className='bg-bg-100 py-2 px-4'>React</span>
              <span className='bg-bg-100 py-2 px-4'>React</span>
            </div>
          </div>
        </div>
      </MainContentCard>
      <header className='w-full h-fit py-10 px-5'>
        <h1 className='text-2xl font-bold text-main-text'>
          Experiencia
        </h1>
      </header>
      <MainContentCard transitionDuration='duration-300' transitionFunction='ease-in-out'>
        asd
      </MainContentCard>
    </MainCard>
  )
}

export default About
