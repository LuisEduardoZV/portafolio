import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import useConfig from '../hooks/useConfig';

const AsideMenuItem = ({ Icon, color, page, title, itsSiri = false, itsControl = false, active = false }) => {
	const { font } = useConfig();

	if (itsSiri) {
		return (
			<Link to="#" className={`flex gap-x-5 rounded-lg px-2 py-1 ${active ? 'bg-acc-main text-white shadow-md' : 'hover:bg-bg-200 hover:shadow'}`}>
				<span className="h-8 w-8 rounded-md flex items-center justify-center p-0 m-0 -ml-0.5 bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url('${Icon}')` }}></span>
				<label className={`cursor-pointer ${font ? 'font-normal' : 'font-bold'}`}>
					<FormattedMessage id="menu-item-siri" />
				</label>
			</Link>
		);
	} else if (itsControl) {
		return (
			<Link to="#" className={`flex gap-x-5 rounded-lg px-2 py-1 ${active ? 'bg-acc-main text-white shadow-md' : 'hover:bg-bg-200 hover:shadow'}`}>
				<span className="h-7 w-7 bg-gradient-to-t from-gray-icon-full to-gray-icon-low rounded-md flex items-center justify-center shadow">
					<span className="h-6 w-6" style={{ backgroundImage: `url('${Icon}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
				</span>
				<label className={`cursor-pointer ${font ? 'font-normal' : 'font-bold'}`}>
					<FormattedMessage id="menu-item-control" />
				</label>
			</Link>
		);
	} else {
		return (
			<Link to={page} className={`flex gap-x-5 rounded-lg px-2 py-1 ${active ? 'bg-acc-main text-white shadow-md' : 'hover:bg-bg-200 hover:shadow'}`}>
				<span className={`h-7 w-7 ${color} rounded-md flex items-center justify-center shadow`}>
					<Icon className="h-6 w-6 text-white" />
				</span>
				<label className={`cursor-pointer ${font ? 'font-normal' : 'font-bold'}`}>
					<FormattedMessage id={title} />
				</label>
			</Link>
		);
	}
};

AsideMenuItem.propTypes = {
	Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	color: PropTypes.string,
	page: PropTypes.string,
	title: PropTypes.string,
	itsSiri: PropTypes.bool,
	itsControl: PropTypes.bool,
	active: PropTypes.bool
};

export default AsideMenuItem;
