import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
