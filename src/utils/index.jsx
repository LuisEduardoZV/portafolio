import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import useConfig from '../hooks/useConfig';

const loadLocaleData = (locale) => {
	switch (locale) {
		case 'en':
			return import('./locales/en.json');
		case 'fr':
			return import('./locales/fr.json');
		case 'pt':
			return import('./locales/pt.json');
		default:
			return import('./locales/es.json');
	}
};

const Locales = ({ children }) => {
	const { locale } = useConfig();
	const [messages, setMessages] = useState();

	useEffect(() => {
		loadLocaleData(locale).then((d) => {
			setMessages(d.default);
		});
	}, [locale]);

	return (
		<>
			{messages && (
				<IntlProvider locale={locale} defaultLocale="es" messages={messages}>
					{children}
				</IntlProvider>
			)}
		</>
	);
};

Locales.propTypes = {
	children: PropTypes.node,
};

export default Locales;
