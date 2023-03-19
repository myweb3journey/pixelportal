import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from "react-router-dom"

// rainbowkit
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, polygonMumbai, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, polygonMumbai, goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'pixel portal',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains} coolMode
        theme={lightTheme({
          accentColor: '#FFFFFF',
          accentColorForeground: 'black',
          borderRadius: 'none',
          fontStack: 'system',
          overlayBlur: 'small',
        })}>
        <Router>
          <App/>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
