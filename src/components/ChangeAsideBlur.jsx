import { useEffect, useState } from 'react';
import useConfig from '../hooks/useConfig';

//import project
import InputSwitch from './ui-components/InputSwitch';

const ChangeAsideBlur = () => {
	const { bgblur, onChangeBlur } = useConfig();

	const [blur, setBlur] = useState(bgblur);

	const handleListItemClick = (event, blr) => {
		setBlur(blr);
		onChangeBlur(blr);
	};

	useEffect(() => {
		setBlur(bgblur);
	}, [bgblur]);

	return (
		<div className="flex w-fit h-fit gap-x-3 items-center justify-center">
			<InputSwitch handleListItemClick={(event) => handleListItemClick(event, !blur)} defChecked={blur} />
		</div>
	);
};

export default ChangeAsideBlur;
