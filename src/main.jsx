import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>         {/* in development it'll run code 2 times, one for checking and one for real */}
    <App />
  </StrictMode>,
)
