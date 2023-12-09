import "../styles/globals.css";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  polygonMumbai
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';



export default function MyApp({ Component, pageProps }) {
  const app_id = process.env.NEXT_PUBLIC_APP_ID;
  console.log("====Root App====");
  console.log("App ID ==> ", app_id);

  const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: 'CommuneIN',
    projectId: 'fdb80d2f241796e3b6d3f28cc175b6bf',
    chains
  });
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })
  

  return (
    // Add the Country Identity Provider at the root of your app
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <AnonAadhaarProvider _appId={app_id} _isWeb={false}>
          <Component {...pageProps} />
        </AnonAadhaarProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}