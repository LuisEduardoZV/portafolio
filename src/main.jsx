import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ConfigProvider } from './context/ConfigContext';
import './index.css';
import Locales from './utils';

//Main pages
import About from './pages/About';
import Config from './pages/Config';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';

//interactive views
import Bluetooth from './views/Bluetooth';
import Wifi from './views/Wifi';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Locales>
				<App />
			</Locales>
		),
		errorElement: <div>Error</div>,
		children: [
			{
				path: '',
				element: <About />,
			},
			{
				path: 'config',
				element: <Config />,
			},
			{
				path: 'school',
				element: <Education />,
			},
			{
				path: 'projects',
				element: <Projects />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'wifi',
				element: <Wifi />,
			},
			{
				path: 'bluetooth',
				element: <Bluetooth />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ConfigProvider>
		<RouterProvider router={router} />
	</ConfigProvider>
);
