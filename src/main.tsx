import { Buffer } from 'buffer';

// Ensure Buffer is available in the browser
if (typeof window !== 'undefined') {
  // @ts-ignore
  (window as any).Buffer = (window as any).Buffer || Buffer;
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
