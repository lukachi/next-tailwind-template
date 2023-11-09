'use client'

import { Ethereum } from '@thirdweb-dev/chains'
import {
  coinbaseWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  ThirdwebProvider,
  walletConnect,
} from '@thirdweb-dev/react'
import type { ReactNode } from 'react'

import { CONFIG } from '@/config'

export default function SessionProxyProvider({ children }: { children: ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain={Ethereum}
      // clientId={CONFIG.THIRDWEB_CLIENT_ID}
      // FIXME
      clientId='f5c6b03cfd8317d9dc4bb05e63eed198'
      authConfig={{
        domain: CONFIG.APP_URL,
        authUrl: '/api/auth',
      }}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
        embeddedWallet(),
      ]}
    >
      {children}
    </ThirdwebProvider>
  )
}
