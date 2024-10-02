import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { ApiKeysProvider } from './context/ApiKeysContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiKeysProvider>
      <App />
    </ApiKeysProvider>
  </StrictMode>,
)
