import PropTypes from 'prop-types';

const MainCard = ({ children, extraStyles }) => {
	return <section className={`w-full h-full flex flex-col px-10 overflow-y-auto min-h-screen transition-all duration-300 ease-in-out ${extraStyles}`}>{children}</section>;
};

MainCard.propTypes = {
	children: PropTypes.node,
	extraStyles: PropTypes.string
};

export default MainCard;
