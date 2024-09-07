import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';

import { clusterApiUrl } from '@solana/web3.js';

// Theme imports - ignore if not styling wallet buttons yet
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');

export default function WalletConnectionProvider({ children }) {
//   const network = "https://api.devnet.solana.com"
  const endpoint = clusterApiUrl("devnet");
  
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
          <WalletMultiButton /> {/* This is the UI component that users will interact with to connect their wallet */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}