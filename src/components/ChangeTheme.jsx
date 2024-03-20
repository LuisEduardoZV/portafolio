import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useConfig from '../hooks/useConfig';

const ChangeTheme = () => {
	const { theme, onChangeTheme } = useConfig();

	const [, setThemeSelected] = useState(theme);

	const handleListItemClick = (event, thm) => {
		setThemeSelected(thm);
		onChangeTheme(thm);
	};

	useEffect(() => {
		setThemeSelected(theme);
	}, [theme]);

	return (
		<div className="flex w-fit h-fit">
			<div className="flex flex-col p-3 justify-center items-center gap-y-2">
				<div className={`flex flex-col w-32 h-20 shadow-md rounded-xl bg-fondo bg-top bg-cover bg-no-repeat relative ${theme === 'default' && 'ring-4 ring-acc-main'} border-white border cursor-pointer`} onClick={(event) => handleListItemClick(event, 'default')}>
					<div className="w-16 h-6 rounded shadow bg-main-100/70 backdrop-blur flex items-start justify-center absolute top-2 left-3">
						<div className="w-14 h-3 rounded bg-blue-icon-full mt-1 shadow" />
					</div>
					<div className="absolute w-3/4 h-1/2 bg-main-100/20 bottom-0 right-0 rounded-tl-lg rounded-br-xl backdrop-blur-lg flex">
						<div className="h-full w-1/2 bg-main-200/80 backdrop-blur-xl rounded-tl-lg flex border-r border-main-200">
							<div className="flex w-fit h-fit p-2 gap-x-1">
								<span className="flex h-2 w-2 rounded-full bg-red-window" />
								<span className="flex h-2 w-2 rounded-full bg-yellow-window" />
								<span className="flex h-2 w-2 rounded-full bg-green-window" />
							</div>
						</div>
						<div className="h-full w-1/2 bg-main-100 rounded-br-xl flex">
							<div className="flex w-full border-b h-1/2 border-main-200"></div>
						</div>
					</div>
				</div>
				<label>
					<FormattedMessage id="theme-light" />
				</label>
			</div>
			<div className="flex flex-col p-3 justify-center items-center gap-y-2">
				<div className={`flex flex-col w-32 h-20 shadow-md rounded-xl bg-fondo bg-top bg-cover bg-no-repeat relative ${theme === 'dark' && 'ring-4 ring-acc-main'} cursor-pointer border border-white`} onClick={(event) => handleListItemClick(event, 'dark')}>
					<div className="w-16 h-6 rounded shadow bg-dark-100/70 backdrop-blur flex items-start justify-center absolute top-2 left-3">
						<div className="w-14 h-3 rounded bg-blue-icon-full mt-1 shadow" />
					</div>
					<div className="absolute w-3/4 h-1/2 bg-dark-200 bottom-0 right-0 rounded-tl-lg rounded-br-xl backdrop-blur-lg flex">
						<div className="h-full w-1/2 bg-dark-200/80 backdrop-blur-xl rounded-tl-lg flex border-r border-dark-200">
							<div className="flex w-fit h-fit p-2 gap-x-1">
								<span className="flex h-2 w-2 rounded-full bg-red-window" />
								<span className="flex h-2 w-2 rounded-full bg-yellow-window" />
								<span className="flex h-2 w-2 rounded-full bg-green-window" />
							</div>
						</div>
						<div className="h-full w-1/2 bg-dark-100 rounded-br-xl flex">
							<div className="flex w-full border-b h-1/2 border-dark-200"></div>
						</div>
					</div>
				</div>
				<label>
					<FormattedMessage id="theme-dark" />
				</label>
			</div>
			<div className="flex flex-col p-3 justify-center items-center gap-y-2">
				<div className={`flex flex-col w-32 h-20 shadow-md rounded-xl bg-fondo bg-top bg-cover bg-no-repeat relative ${theme === 'cinnamon' && 'ring-4 ring-acc-main'} cursor-pointer border border-white`} onClick={(event) => handleListItemClick(event, 'cinnamon')}>
					<div className="w-16 h-6 rounded shadow bg-cinnamon-100/70 backdrop-blur flex items-start justify-center absolute top-2 left-3">
						<div className="w-14 h-3 rounded bg-blue-icon-full mt-1 shadow" />
					</div>
					<div className="absolute w-3/4 h-1/2 bg-cinnamon-200 bottom-0 right-0 rounded-tl-lg rounded-br-xl backdrop-blur-lg flex">
						<div className="h-full w-1/2 bg-cinnamon-200 backdrop-blur-xl rounded-tl-lg flex border-r border-cinnamon-200">
							<div className="flex w-fit h-fit p-2 gap-x-1">
								<span className="flex h-2 w-2 rounded-full bg-red-window" />
								<span className="flex h-2 w-2 rounded-full bg-yellow-window" />
								<span className="flex h-2 w-2 rounded-full bg-green-window" />
							</div>
						</div>
						<div className="h-full w-1/2 bg-cinnamon-100 rounded-br-xl flex">
							<div className="flex w-full border-b h-1/2 border-cinnamon-200"></div>
						</div>
					</div>
				</div>
				<label>
					<FormattedMessage id="theme-cinnamon" />
				</label>
			</div>
			<div className="flex flex-col p-3 justify-center items-center gap-y-2">
				<div className={`flex flex-col w-32 h-20 shadow-md rounded-xl bg-fondo bg-top bg-cover bg-no-repeat relative ${theme === 'lavanda' && 'ring-4 ring-acc-main'} cursor-pointer border border-white`} onClick={(event) => handleListItemClick(event, 'lavanda')}>
					<div className="w-16 h-6 rounded shadow bg-lavanda-100/70 backdrop-blur flex items-start justify-center absolute top-2 left-3">
						<div className="w-14 h-3 rounded bg-blue-icon-full mt-1 shadow" />
					</div>
					<div className="absolute w-3/4 h-1/2 bg-lavanda-200 bottom-0 right-0 rounded-tl-lg rounded-br-xl backdrop-blur-lg flex">
						<div className="h-full w-1/2 bg-lavanda-200/80 backdrop-blur-xl rounded-tl-lg flex border-r border-lavanda-200">
							<div className="flex w-fit h-fit p-2 gap-x-1">
								<span className="flex h-2 w-2 rounded-full bg-red-window" />
								<span className="flex h-2 w-2 rounded-full bg-yellow-window" />
								<span className="flex h-2 w-2 rounded-full bg-green-window" />
							</div>
						</div>
						<div className="h-full w-1/2 bg-lavanda-100 rounded-br-xl flex">
							<div className="flex w-full border-b h-1/2 border-lavanda-200"></div>
						</div>
					</div>
				</div>
				<label>
					<FormattedMessage id="theme-lavanda" />
				</label>
			</div>
		</div>
	);
};

export default ChangeTheme;
