import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ConfigProvider } from './context/ConfigContext'
import './index.css'

import { MAIN_PATH } from './config'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider>
    <BrowserRouter basename={MAIN_PATH}>
      <App />
    </BrowserRouter>
  </ConfigProvider>
)
