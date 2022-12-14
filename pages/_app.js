import '../styles/globals.css'
import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css';
import { lightTheme, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  walletConnectWallet,
  coinbaseWallet,
  metaMaskWallet
} from '@rainbow-me/rainbowkit/wallets';
import { rainbowWeb3AuthConnector } from '../utils/rainbowWeb3authConnector';
import { BottomNavbar } from '../components/BottomNavbar';



const { chains, provider } = configureChains(
  [chain.polygon],
  [
    publicProvider()
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),
      rainbowWeb3AuthConnector({ chains }),
      coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
      injectedWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })



function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} 
       theme={lightTheme({
        accentColor: 'linear-gradient(95.6deg, #FA5985 0.95%, #FDC731 96.58%)',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
      })}
    >
      <ChakraProvider theme={theme}>
        <Container maxW="sm">  
        <Component {...pageProps} />
        <BottomNavbar />
          </Container>
      </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
