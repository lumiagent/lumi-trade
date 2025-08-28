import OrderlyProviders from './providers/OrderlyProviders';
import { TradingPage } from '@orderly.network/trading';

function App() {
  const year = new Date().getFullYear();
  return (
    <OrderlyProviders>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <header>
          <div className="title">
            <img src="/logo-lumi.svg" alt="LUMI" className="logo" />
            <span>LUMI TRADE</span>
          </div>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
            powered by Orderly Network
          </span>
        </header>
        <main style={{ flex: 1, overflow: 'hidden' }}>
          <TradingPage />
        </main>
        <footer>© {year} LUMI Agent — All rights reserved</footer>
      </div>
    </OrderlyProviders>
  );
}

export default App;
