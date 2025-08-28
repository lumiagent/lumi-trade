import type { PropsWithChildren } from 'react';
import { OrderlyAppProvider } from '@orderly.network/react-app';
import { WalletConnectorProvider } from '@orderly.network/wallet-connector';

/**
 * Wrap children with OrderlyAppProvider and WalletConnectorProvider.
 * Reads environment variables set at build time to configure network and broker.
 */
export default function OrderlyProviders({ children }: PropsWithChildren<{}>) {
  // Read values from Vite environment variables. Use testnet as default.
  const networkId = (import.meta.env.VITE_ORDERLY_ENV as 'testnet' | 'mainnet') || 'testnet';
  const brokerId = import.meta.env.VITE_BROKER_ID || 'lumi-trade';
  const brokerName = 'LUMI TRADE';
  const logoUrl = '/logo-lumi.svg';

  return (
    <WalletConnectorProvider>
      <OrderlyAppProvider
        networkId={networkId}
        brokerId={brokerId}
        brokerName={brokerName}
        brokerLogo={logoUrl}
      >
        {children}
      </OrderlyAppProvider>
    </WalletConnectorProvider>
  );
}
