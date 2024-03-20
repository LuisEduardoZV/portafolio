import { useEffect, useState } from 'react';
import useConfig from '../hooks/useConfig';

//import projects
import InputRadio from './ui-components/InputRadio';

const ChangeFont = () => {
	const { font, onChangeFont } = useConfig();

	const [, setFontSelected] = useState(font);

	const handleListItemClick = (event, fnt) => {
		setFontSelected(fnt);
		onChangeFont(fnt);
	};

	useEffect(() => {
		setFontSelected(font);
	}, [font]);

	return (
		<div className="flex w-fit h-fit gap-x-3 items-center justify-center">
			<InputRadio handleListItemClick={handleListItemClick} title="font-bold" value={false} defChecked={!font} name="font" />
			<InputRadio handleListItemClick={handleListItemClick} title="font-normal" value={true} defChecked={font} name="font" />
		</div>
	);
};

export default ChangeFont;
