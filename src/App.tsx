import React from 'react'
import { OrderlyAppProvider } from '@orderly.network/react-app'
import rading from './pages/Trading'

function App() {
  const broker_id = import.meta.env.VITE_BROKER_ID
  const network_id = import.meta.env.VITE_NETWORK_ID

  return <OrderlyAppProvider brokerId={broker_id} networkId={network_id}>
    <Trading />
  </OrderlyAppProvider>
}

export default App
