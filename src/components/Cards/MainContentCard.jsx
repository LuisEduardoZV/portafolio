import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import useConfig from '../../hooks/useConfig';

const objToString = (obj) => {
	var styles = [];
	Object.keys(obj).forEach((k) => {
		styles.push(obj[k]);
	});

	return styles.join(' ');
};

const MainContentCard = ({ children, style, ...others }) => {
	const { font } = useConfig();

	const defaultStyles = useMemo(
		() => ({
			opacity: 'opacity-100',
			h: 'h-fit',
			rounded: 'rounded-lg',
			p: 'p-3',
			w: 'w-full',
			display: 'flex',
			flexDirection: 'flex-col',
			my: 'my-4',
			bgColor: 'bg-bg-200',
			border: 'border',
			borderColor: 'border-main-border',
			alignItems: 'items-center',
			textColor: 'text-main-text',
			fontWeight: font ? 'font-normal' : 'font-bold',
			transition: 'transition-all',
			transitionDuration: 'duration-0',
			transitionFunction: 'ease-linear',
			...others,
		}),
		[font, others]
	);

	const [styles, setStyles] = useState('');

	useEffect(() => {
		const styles = {
			...defaultStyles,
			...style,
		};
		const data = objToString(styles);
		setStyles(data);
	}, [style, defaultStyles]);

	return <article className={`${styles}`}>{children}</article>;
};

MainContentCard.propTypes = {
	children: PropTypes.node.isRequired,
	opacity: PropTypes.string,
	rounded: PropTypes.string,
	hight: PropTypes.string,
	p: PropTypes.string,
	style: PropTypes.shape({
		opacity: PropTypes.string,
		hight: PropTypes.string,
		rounded: PropTypes.string,
		p: PropTypes.string,
		w: PropTypes.string,
		display: PropTypes.string,
		flexDirection: PropTypes.string,
		my: PropTypes.string,
		bgColor: PropTypes.string,
		border: PropTypes.string,
		borderColor: PropTypes.string,
		alignItems: PropTypes.string,
		textColor: PropTypes.string,
		transition: PropTypes.string,
		transitionDuration: PropTypes.string,
		transitionFunction: PropTypes.string,
	}),
};

export default MainContentCard;
