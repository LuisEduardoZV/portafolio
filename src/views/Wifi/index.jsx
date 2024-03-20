import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

//project imports
import MainCard from '../../components/Cards/MainCard';
import MainContentCard from '../../components/Cards/MainContentCard';
import InputSwitch from '../../components/ui-components/InputSwitch';

//assets
import { IconCheck, IconInfoCircle, IconLock, IconWifi, IconWifi0, IconWifi1, IconWifi2 } from '@tabler/icons-react';

const NETOWRKS_PREFIX = ['INFINITUM', 'IZZI-'];

const Wifi = () => {
	const [active, setActive] = useState(false);
	const [items, setItems] = useState([]);

	const [actualNet, setActualNet] = useState({});
	const [netSelected, setNetSelected] = useState(null);
	const [pass, setPass] = useState('');
	const [showPas, setShowPass] = useState(false);

	const [timerLoaderPass, setTimerLoaderPass] = useState(false);

	const [modal, setModal] = useState(false);
	const [error, setError] = useState(false);

	const handleActive = () => {
		setActive((current) => !current);
	};

	const handleModal = (data) => {
		if (data.open) {
			setTimerLoaderPass(true);
			setModal(false);
			setNetSelected(null);
			setActualNet(data);
		} else {
			setModal((current) => !current);
			setNetSelected(data);
		}
	};

	const handlePass = (e) => {
		setPass(e.target.value);
	};

	const handleShowPass = () => {
		setShowPass((current) => !current);
	};

	const handleCheckPassword = (e) => {
		e.preventDefault();
		if (pass?.trim() === '' || pass === undefined) {
			setError(true);
		} else {
			setTimerLoaderPass(true);
			setModal(false);
			setActualNet(netSelected);
			setNetSelected(null);
			setPass('');
			setShowPass(false);
		}
	};

	const networksAvailable = () => {
		var available = [...Array(10).keys()].map(() => {
			var obj = {};
			const random = Math.floor(Math.random() * 90000) + 10000;
			obj.name = NETOWRKS_PREFIX[Math.floor(Math.random() * NETOWRKS_PREFIX.length)] + random;
			obj.open = random > 50000 ? true : false;
			obj.intensity = random < 15000 ? 1 : random < 30000 ? 3 : random < 60000 ? 0 : 1;
			return obj;
		});
		available = available.sort((a, b) => b.intensity - a.intensity);
		setItems(available);
	};

	useEffect(() => {
		networksAvailable();
	}, []);

	useEffect(() => {
		var id;
		if (actualNet?.name) {
			console.log('entra');
			id = setTimeout(() => setTimerLoaderPass(false), 2000);
		}
		return () => clearTimeout(id);
	}, [actualNet]);

	return (
		<>
			<MainCard>
				<header className="w-full h-fit py-10 px-5">
					<h1 className="text-2xl font-bold text-main-text">
						<FormattedMessage id="menu-item-wifi" />
					</h1>
				</header>
				<MainContentCard>
					<section className="grid grid-cols-12 w-full h-fit justify-items-stretch content-center place-content-center">
						<label className="flex justify-self-end items-center w-full"></label>
						<label className={`flex w-full col-span-9 items-center ${active && actualNet.name && 'border-b border-b-gray-300'}`}>
							<FormattedMessage id="menu-item-wifi" />
						</label>
						<div className={`justify-self-center items-center justify-center col-span-2 ${active && actualNet.name && 'border-b border-b-gray-300'} flex w-full`}>
							<InputSwitch handleListItemClick={handleActive} />
						</div>
					</section>
					<section className={`grid grid-cols-12 w-full ${active && actualNet.name ? 'h-fit opacity-100 mt-4' : 'opacity-0 h-0'} justify-items-stretch content-center place-content-center transition-all duration-100 ease-linear`}>
						<label className="flex justify-self-end items-center justify-end pr-5 w-full">{timerLoaderPass ? <div className="custom-loader"></div> : <IconCheck className="h-6 w-6 text-acc-main" />}</label>
						<label className="flex w-full col-span-9 items-center">{actualNet?.name}</label>
						<div className="justify-self-center col-span-2 w-full flex items-center justify-center gap-x-2">
							<div className="w-7">{!actualNet?.open && <IconLock className="h-6 w-6 text-black cursor-default" />}</div>
							<div className="w-7">{actualNet?.intensity === 0 ? <IconWifi0 className="h-6 w-6 text-black cursor-default" /> : actualNet?.intensity === 1 ? <IconWifi1 className="h-6 w-6 text-black cursor-default" /> : actualNet?.intensity === 2 ? <IconWifi2 className="h-6 w-6 text-black cursor-default" /> : <IconWifi className="h-6 w-6 text-black cursor-default" />}</div>
							<div className="w-7">
								<IconInfoCircle className="h-6 w-6 text-acc-main cursor-pointer" />
							</div>
						</div>
					</section>
				</MainContentCard>
				<label className={`flex w-full px-10 text-main-text-low text-sm mt-3 ${active ? 'h-0 hidden' : 'h-fit block'}`}>
					<FormattedMessage id="wifi-info" />
				</label>
				<div className={`flex w-full h-full mt-8 items-center gap-x-2 ${!active ? 'opacity-0' : 'opacity-100'} transition-opacity duration-100`}>
					<label className="uppercase text-main-text-low pl-10">
						<FormattedMessage id="wifi-subtitle" />
					</label>
					<div className={`custom-loader ${active && 'opacity-0 delay-700'} transition-opacity duration-100 ease-linear`}></div>
				</div>
				<MainContentCard opacity={`${active ? 'opacity-100' : 'opacity-0'}`} delay={`${active && 'delay-700'}`} hight={`${active ? 'h-fit' : 'h-0'}`} z={`${active ? 'z-0' : '-z-10'}`}>
					{items.map((data, index) => (
						<section
							key={index}
							className="grid grid-cols-12 w-full h-fit justify-items-stretch content-center place-content-center cursor-pointer "
							onClick={() => {
								handleModal(data);
							}}>
							<label className="flex justify-self-end items-center cursor-default w-full"></label>
							<label className={`flex w-full col-span-9 items-center ${active && 'border-b border-b-gray-300'} py-3 cursor-pointer`}>{data.name}</label>
							<div className={`justify-self-center col-span-2 w-full flex items-center justify-center gap-x-2 ${active && 'border-b border-b-gray-300'} flex w-full py-3`}>
								<div className="w-6">{!data.open && <IconLock className="h-5 w-5 text-black cursor-default" />}</div>
								<div className="w-6">{data.intensity === 0 ? <IconWifi0 className="h-5 w-5 text-black cursor-default" /> : data.intensity === 1 ? <IconWifi1 className="h-5 w-5 text-black cursor-default" /> : data.intensity === 2 ? <IconWifi2 className="h-5 w-5 text-black cursor-default" /> : <IconWifi className="h-5 w-5 text-black cursor-default" />}</div>
								<div className="w-6">
									<IconInfoCircle className="h-5 w-5 text-acc-main cursor-pointer" />
								</div>
							</div>
						</section>
					))}
					<section className="grid grid-cols-12 w-full h-fit justify-items-stretch content-center place-content-center">
						<label className="flex justify-self-end items-center w-full"></label>
						<label className={`flex w-full col-span-9 items-center  py-3`}>
							<FormattedMessage id="wifi-other" />
						</label>
						<div className={`justify-self-center col-span-2 w-full flex items-center justify-center gap-x-2 py-3`}></div>
					</section>
				</MainContentCard>
			</MainCard>
			<article className={`flex flex-col items-center justify-center w-5/6 h-full m-0 ${modal ? 'z-10 opacity-100' : '-z-10 opacity-0'} absolute bg-black/10 backdrop-blur-[1px] transition-all duration-200 ease-linear delay-100`}>
				<section className="bg-bg-200 shadow p-3 rounded-lg max-w-lg w-full h-fit relative">
					<form onSubmit={handleCheckPassword} className="w-full flex flex-col h-fit">
						<div className="w-full flex items-center gap-x-3">
							<IconWifi className="w-28 h-28 text-acc-main" />
							<label className="self-start pt-5 text-sm">
								<FormattedMessage id="wifi-info-conect-pt1" /> {netSelected?.name} <FormattedMessage id="wifi-info-conect-pt2" />
							</label>
						</div>
						<div className="w-full h-fit flex flex-col items-center justify-center">
							<div className="w-fit grid grid-cols-3 grid-rows-2 gap-3 justify-center">
								<label className="justify-self-end">
									<FormattedMessage id="wifi-password" />:
								</label>
								<input type={showPas ? 'text' : 'password'} value={pass} onChange={(e) => handlePass(e)} className={`justify-self-start col-span-2 rounded px-2 shadow focus:ring focus:ring-acc-main outline-none ${error ? 'border border-red-window focus:border-none' : 'border-none'}`} />
								<div className="col-span-3 justify-self-center flex gap-x-3 items-center pl-20">
									<input type="checkbox" onChange={handleShowPass} checked={showPas} className="border-main-border hover:border-main-border cursor-pointer" />
									<label>
										<FormattedMessage id="wifi-show" />
									</label>
								</div>
							</div>
						</div>
						<div className="flex w-full h-fit justify-end gap-x-10 px-8 mt-10 mb-3">
							<button
								className="px-3 rounded shadow-lg bg-gradient-to-t from-bg-200 to-bg-100 hover:shadow-md transition-shadow duration-200 ease-in-out"
								onClick={() => {
									setModal(false);
									setPass('');
									setShowPass(false);
									setNetSelected(null);
								}}>
								<FormattedMessage id="wifi-cancel" />
							</button>
							<button type="submit" className="px-3 rounded shadow-lg bg-gradient-to-t from-acc-main to-acc-main-low text-white hover:shadow-md transition-shadow duration-200 ease-in-out">
								<FormattedMessage id="wifi-send" />
							</button>
						</div>
					</form>
				</section>
			</article>
		</>
	);
};

export default Wifi;
