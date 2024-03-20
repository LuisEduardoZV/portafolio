import { useEffect, useState } from 'react';
import useConfig from '../hooks/useConfig';

//import projects
import InputRadio from './ui-components/InputRadio';

const ChangeLocalization = () => {
	const { locale, onChangeLocale } = useConfig();

	const [, setLanguage] = useState(locale);

	const handleListItemClick = (event, lng) => {
		setLanguage(lng);
		onChangeLocale(lng);
	};

	useEffect(() => {
		setLanguage(locale);
	}, [locale]);

	return (
		<>
			<InputRadio handleListItemClick={handleListItemClick} title="lng-es" value="es" name="lng" defChecked={locale === 'es' && true} />
			<InputRadio handleListItemClick={handleListItemClick} title="lng-en" value="en" name="lng" defChecked={locale === 'en' && true} />
			<InputRadio handleListItemClick={handleListItemClick} title="lng-fr" value="fr" name="lng" defChecked={locale === 'fr' && true} />
			<InputRadio handleListItemClick={handleListItemClick} title="lng-pt" value="pt" name="lng" defChecked={locale === 'pt' && true} />
		</>
	);
};

export default ChangeLocalization;
