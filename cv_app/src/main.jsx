import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './components/Name.jsx'
import Education from './components/Education.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name />
    <Education />
  </StrictMode>,
)
