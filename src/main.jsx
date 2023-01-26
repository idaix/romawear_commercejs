import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NextUIProvider, createTheme } from '@nextui-org/react'

const theme = createTheme({type: "dark"})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
