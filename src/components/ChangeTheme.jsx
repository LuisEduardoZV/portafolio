import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useConfig from '../hooks/useConfig';

// project imports
import PrevThemeView from './extends/PrevThemeView';

const ChangeTheme = () => {
	const { theme, onChangeTheme, bgblur } = useConfig();

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
				<PrevThemeView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='default' blur={bgblur} />
				<label>
					<FormattedMessage id="theme-light" />
				</label>
			</div>
			<div className="flex flex-col p-3 justify-center items-center gap-y-2">
				<PrevThemeView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='dark' blur={bgblur} />
				<label>
					<FormattedMessage id="theme-dark" />
				</label>
			</div>
			<div className="flex flex-col p-3 justify-center items-center gap-y-2">
				<PrevThemeView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='cinnamon' blur={bgblur} />
				<label>
					<FormattedMessage id="theme-cinnamon" />
				</label>
			</div>
			<div className="flex flex-col p-3 justify-center items-center gap-y-2">
				<PrevThemeView handleListItemClick={handleListItemClick} theme={theme} thisViewIs='lavanda' blur={bgblur} />
				<label>
					<FormattedMessage id="theme-lavanda" />
				</label>
			</div>
		</div>
	);
};

export default ChangeTheme;
