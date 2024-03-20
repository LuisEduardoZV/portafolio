import PropTypes from 'prop-types';

const InputSwitch = ({ handleListItemClick, defChecked = false }) => {
	return (
		<label className="relative flex justify-between items-center p-2 text-xl cursor-pointer">
			<input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer" onChange={handleListItemClick} defaultChecked={defChecked} />
			<span className="w-16 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-500 ease-in-out peer-checked:bg-green-icon-full after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-500 peer-checked:after:translate-x-9 cursor-pointer after:cursor-pointer"></span>
		</label>
	);
};

InputSwitch.propTypes = {
	handleListItemClick: PropTypes.func,
	defChecked: PropTypes.bool,
};

export default InputSwitch;
