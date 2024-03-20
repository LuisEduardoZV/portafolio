import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const InputRadio = ({ handleListItemClick, title, value, defChecked = false, name }) => {
	return (
		<label className="flex cursor-pointer relative overflow-hidden mb-2">
			<input type="radio" name={name} className="absolute left-[-9999px] peer" defaultChecked={defChecked} onChange={(event) => handleListItemClick(event, value)} />
			<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio before:peer-checked:shadow-acc-main flex items-center py-[0.175em] px-[0.75em] rounded-full duration-300 ease-in-out before:flex before:shrink-0 before:content-[''] before:w-[1em] before:h-[1em] before:rounded-[50%] before:mr-[0.375em] before:duration-300 before:ease-in-out before:shadow-input-radio-before before:shadow-acc-main">
			</span>
				<FormattedMessage id={title} />
		</label>
	);
};

InputRadio.propTypes = {
	handleListItemClick: PropTypes.func,
	title: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	defChecked: PropTypes.bool,
	name: PropTypes.string,
};

export default InputRadio;
