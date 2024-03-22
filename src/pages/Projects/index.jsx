import { FormattedMessage } from 'react-intl';

// project imports
import MainCard from '../../components/Cards/MainCard';
import MainContentCard from '../../components/Cards/MainContentCard';

const Projects = () => {
	return (
		<>
		<MainCard>
			<header className="w-full h-fit py-10 px-5">
				<h1 className="text-2xl font-bold text-main-text">
					<FormattedMessage id="menu-item-projects" />
				</h1>
			</header>
			<section className='flex flex-wrap justify-between gap-4'>
				<MainContentCard transitionDuration={'duration-300'} transitionFunction={'ease-in-out'} flexDirection='flex-row' gap='gap-5' position='relative' maxHeight='max-h-56'>
					<div className='h-full max-h-56 w-1/2 rounded-lg group peer'>
						<div className='group-hover:scale-150 group-hover:translate-x-28 transition-all duration-300 ease-in-out relative group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg '>
							<div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video max-h-56 w-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 group-hover:bg-mainBlack' />
							<div className='relative bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-56 rounded-lg form animate-formingImages cursor-pointer transition-all duration-300 ease-in-out shadow group-hover:bg-loginBlack'/>
						</div>
					</div>
					<div className='flex flex-col w-full h-52 justify-between peer-hover:ml-48 transition-all duration-300 ease-in-out'>
						<h1 className='text-xl font-bold text-main-text'>Starlink Vinculation App</h1>
						<p className='w-full transition-all duration-300 ease-in-out'>
						Starlink Vinculation App es una aplicación diseñada para gestionar clientes y antenas Starlink. Permite crear usuarios, vincular antenas y generar reportes de consumo de datos. Ideal para empresas de alquiler de equipos y antenas.<br /><br />
						<a href='https://luiseduardozv.github.io/starlink-vinculation-app/' target='_blank'>Página Web</a>
						</p>
						<div className='flex flex-wrap gap-3'>
							<span className='bg-transparent px-2 py-0 rounded-full border border-solid border-cyan-600 text-sm text-cyan-600 font-semibold hover:shadow-md hover:shadow-cyan-600/30 transition-all duration-300 ease-in'>React</span>
							<span className='bg-transparent px-2 py-0 rounded-full border border-solid border-blue-600 text-sm text-blue-600 font-semibold hover:shadow-md hover:shadow-blue-600/30 transition-all duration-300 ease-in'>MUI</span>
							<span className='bg-transparent px-2 py-0 rounded-full border border-solid border-purple-600 text-sm text-purple-600 font-semibold hover:shadow-md hover:shadow-purple-600/30 transition-all duration-300 ease-in'>Redux</span>
						</div>
					</div>
				</MainContentCard>
				<MainContentCard transitionDuration={'duration-300'} transitionFunction={'ease-in-out'} flexDirection='flex-row-reverse' gap='gap-5' position='relative' maxHeight='max-h-56'>
					<div className='h-full max-h-56 w-1/2 rounded-lg group peer'>
						<div className='group-hover:scale-150 group-hover:-translate-x-28 transition-all duration-300 ease-in-out relative group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg '>
							<div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video max-h-56 w-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 group-hover:bg-mainBlack' />
							<div className='relative bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-56 rounded-lg form animate-formingImages cursor-pointer transition-all duration-300 ease-in-out shadow group-hover:bg-loginBlack'/>
						</div>
					</div>
					<div className='flex flex-col w-full h-52 justify-between peer-hover:mr-48 transition-all duration-300 ease-in-out'>
						<h1 className='text-xl font-bold text-main-text'>Starlink Vinculation App</h1>
						<p className='w-full transition-all duration-300 ease-in-out'>
						Starlink Vinculation App es una aplicación diseñada para gestionar clientes y antenas Starlink. Permite crear usuarios, vincular antenas y generar reportes de consumo de datos. Ideal para empresas de alquiler de equipos y antenas.<br /><br />
						<a href='https://luiseduardozv.github.io/starlink-vinculation-app/' target='_blank'>Página Web</a>
						</p>
						<div className='flex flex-wrap gap-3'>
							<span className='bg-transparent px-2 py-0 rounded-full border border-solid border-cyan-600 text-sm text-cyan-600 font-semibold hover:shadow-md hover:shadow-cyan-600/30 transition-all duration-300 ease-in'>React</span>
							<span className='bg-transparent px-2 py-0 rounded-full border border-solid border-blue-600 text-sm text-blue-600 font-semibold hover:shadow-md hover:shadow-blue-600/30 transition-all duration-300 ease-in'>MUI</span>
							<span className='bg-transparent px-2 py-0 rounded-full border border-solid border-purple-600 text-sm text-purple-600 font-semibold hover:shadow-md hover:shadow-purple-600/30 transition-all duration-300 ease-in'>Redux</span>
						</div>
					</div>
				</MainContentCard>
				<MainContentCard transitionDuration={'duration-300'} transitionFunction={'ease-in-out'} flexDirection='flex-row' gap='gap-5' position='relative' maxHeight='max-h-56' mb='mb-10'>
					<div className='h-full max-h-56 w-1/2 rounded-lg group peer'>
						<div className='group-hover:scale-150 group-hover:translate-x-28 transition-all duration-300 ease-in-out relative group-hover:shadow-[1px_3px_13px_3px_rgba(116,116,116,1)] rounded-lg '>
							<div className='bg-mainDefault bg-origin-border bg-center bg-cover bg-no-repeat absolute top-0 right-0 m-0 p-0 aspect-video max-h-56 w-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 group-hover:bg-mainBlack' />
							<div className='relative bg-loginDefault bg-origin-border bg-center bg-cover bg-no-repeat aspect-video max-h-56 rounded-lg form animate-formingImages cursor-pointer transition-all duration-300 ease-in-out shadow group-hover:bg-loginBlack'/>
						</div>
					</div>
					<div className='flex flex-col w-full h-52 justify-between peer-hover:ml-48 transition-all duration-300 ease-in-out'>
						<h1 className='text-xl font-bold text-main-text'>Starlink Vinculation App</h1>
						<p className='w-full'>
						Starlink Vinculation App es una aplicación diseñada para gestionar clientes y antenas Starlink. Permite crear usuarios, vincular antenas y generar reportes de consumo de datos. Ideal para empresas de alquiler de equipos y antenas.<br /><br />
						<a href='https://luiseduardozv.github.io/starlink-vinculation-app/' target='_blank'>Página Web</a>
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
};

export default Projects;
