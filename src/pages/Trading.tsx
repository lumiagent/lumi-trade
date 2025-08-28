import React from 'react'
import { Trading as OrderlyTrading } from '@orderly.network/trading'

const Trading: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <OrderlyTrading />
    </div>
  )
}

export default Trading
