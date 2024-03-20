import { FormattedMessage } from 'react-intl';
import MainCard from '../../components/Cards/MainCard';
import MainContentCard from '../../components/Cards/MainContentCard';
import ChangeAccent from '../../components/ChangeAccent';
import ChangeAsideBlur from '../../components/ChangeAsideBlur';
import ChangeFont from '../../components/ChangeFont';
import ChangeLocalization from '../../components/ChangeLocalization';
import ChangeTheme from '../../components/ChangeTheme';
import Divider from '../../components/ui-components/Divider';

const Config = () => {
	return (
		<MainCard>
			<header className="w-full h-fit py-10 px-5">
				<h1 className="text-2xl font-bold text-main-text">
					<FormattedMessage id="config-title" />
				</h1>
			</header>
			<MainContentCard transitionDuration={'duration-300'} transitionFunction={'ease-in-out'}>
				<div className="w-full flex justify-between px-2 py-5">
					<h2>
						<FormattedMessage id="config-aspect" />
					</h2>
					<ChangeTheme />
				</div>
				<Divider />
				<div className="w-full flex justify-between px-2 py-5">
					<h2>
						<FormattedMessage id="config-color" />
					</h2>
					<ChangeAccent />
				</div>
				<Divider />
				<div className="w-full flex justify-between px-2 py-5">
					<h2>
						<FormattedMessage id="config-font" />
					</h2>
					<ChangeFont />
				</div>
				<Divider />
				<div className="w-full flex justify-between px-2 py-5">
					<h2>
						<FormattedMessage id="config-blur" />
					</h2>
					<ChangeAsideBlur />
				</div>
			</MainContentCard>
			<MainContentCard transitionDuration={'duration-300'} transitionFunction={'ease-in-out'}>
				<div className="w-full flex-col justify-between px-2 py-5">
					<h2 className="mb-5">
						<FormattedMessage id="config-language" />
					</h2>
					<ChangeLocalization />
				</div>
			</MainContentCard>
		</MainCard>
	);
};

export default Config;
