import { IconAccessible, IconAddressBook, IconBellFilled, IconBluetooth, IconBrowser, IconContrast, IconHandStop, IconHourglassHigh, IconMoonFilled, IconSchool, IconSettings, IconVolume, IconWifi, IconWorldWww } from '@tabler/icons-react';
import IconControl from '../assets/icons/Control.svg';
import IconSiri from '../assets/icons/Siri.png';

const mainMenuItems = [
	{ Icon: IconSettings, color: 'bg-gradient-to-t from-gray-icon-full to-gray-icon-low', page: 'config', title: 'menu-item-config' },
	{ Icon: IconSchool, color: 'bg-gradient-to-t from-green-icon-full to-green-icon-low', page: 'school', title: 'menu-item-school' },
	{ Icon: IconBrowser, color: 'bg-gradient-to-t from-blue-icon-full to-blue-icon-low', page: 'projects', title: 'menu-item-projects' },
	{ Icon: IconAddressBook, color: 'bg-gradient-to-t from-light-blue-icon-full to-light-blue-icon-low', page: 'contact', title: 'menu-item-contact' },
];

const menuItemsSec1 = [
	{ Icon: IconWifi, color: 'bg-gradient-to-t from-blue-icon-full to-blue-icon-low', page: 'wifi', title: 'menu-item-wifi' },
	{ Icon: IconBluetooth, color: 'bg-gradient-to-t from-blue-icon-full to-blue-icon-low', page: 'bluetooth', title: 'menu-item-bluetooth' },
	{ Icon: IconWorldWww, color: 'bg-gradient-to-t from-blue-icon-full to-blue-icon-low', page: '#', title: 'menu-item-netowrk' },
];

const menuItemsSec2 = [
	{ Icon: IconBellFilled, color: 'bg-gradient-to-t from-orange-icon-full to-orange-icon-low', page: '#', title: 'menu-item-notifications' },
	{ Icon: IconVolume, color: 'bg-gradient-to-t from-red-icon-full to-red-icon-low', page: '#', title: 'menu-item-sound' },
	{ Icon: IconMoonFilled, color: 'bg-gradient-to-t from-purple-icon-full to-purple-icon-low', page: '#', title: 'menu-item-focus' },
	{ Icon: IconHourglassHigh, color: 'bg-gradient-to-t from-purple-icon-full to-purple-icon-low', page: '#', title: 'menu-item-screentime' },
];

const menuItemsSec3 = [
	{ Icon: IconContrast, color: 'bg-black', page: '#', title: 'menu-item-appearance' },
	{ Icon: IconAccessible, color: 'bg-gradient-to-t from-blue-icon-full to-blue-icon-low', page: '#', title: 'menu-item-accessible' },
	{ itsControl: true, Icon: IconControl },
	{ itsSiri: true, Icon: IconSiri },
	{ Icon: IconHandStop, color: 'bg-gradient-to-t from-blue-icon-full to-blue-icon-low', page: '#', title: 'menu-item-privacy' },
];

export { mainMenuItems, menuItemsSec1, menuItemsSec2, menuItemsSec3 };
