import React from 'react'
import ReactDOM from 'react-dom/client'
import { Buffer } from 'buffer'
import App from './App'
import './styles.css'

if (typeof window !== 'undefined') {
  // @ts-ignore
  (window as any).Buffer = (window as any).Buffer || Buffer
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
