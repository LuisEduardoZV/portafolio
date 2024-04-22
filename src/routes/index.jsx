import { useRoutes } from 'react-router-dom'

// project imports
import Locales from '../utils'

// Main pages
import MainContainer from '../layout/MainContainer'
import About from '../pages/About'
import Config from '../pages/Config'
import Projects from '../pages/Projects'

// interactive views
import Bluetooth from '../views/Bluetooth'
import Wifi from '../views/Wifi'

export default function ThemeRoutes () {
  const Routes = {
    path: '/',
    element: (
      <Locales>
        <MainContainer />
      </Locales>
    ),
    errorElement: <div>Error</div>,
    children: [
      {
        path: '',
        element: <About />
      },
      {
        path: 'config',
        element: <Config />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'wifi',
        element: <Wifi />
      },
      {
        path: 'bluetooth',
        element: <Bluetooth />
      }
    ]
  }
  return useRoutes([Routes])
}
