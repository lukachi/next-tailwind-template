import { PrivateKeyWallet } from '@thirdweb-dev/auth/evm'
import { ThirdwebAuth } from '@thirdweb-dev/auth/next'

import { CONFIG } from '@/config'

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: CONFIG.APP_URL,
  // FIXME: not working
  // wallet: new PrivateKeyWallet(process.env.NEXT_THIRDWEB_SERVER_ADMIN_SECRET ?? ''),
  wallet: new PrivateKeyWallet(
    '0x89a41ddf35e94fc5b6ccfe86c77401d37248d9320095b6a3645ccbbef831f204',
  ),
  authOptions: {
    // TODO: Enforce that the user's login message has these exact values
    statement: 'I agree to the terms of service',
    uri: 'https://frontend.example.com',
    resources: ['https://terms-of-service.example.com'],
    version: '1',
    chainId: '1',
    // TODO: Prevent replay attacks
    // validateNonce: async (nonce: string) => {
    //   // Check in database or storage if nonce exists
    //   const nonceExists = await dbExample.nonceExists(nonce)
    //
    //   if (nonceExists) {
    //     throw new Error('Nonce has already been used!')
    //   }
    //
    //   // Otherwise save nonce in database or storage for later validation
    //   await dbExample.saveNonce(nonce)
    // },
    // TODO: Change the token validity duration
    // tokenDurationInSeconds: 60 * 60 * 24 * 7, // 1 week
    // TODO: Change the token refresh interval
    // refreshIntervalInSeconds: 60 * 60, // 1 hour
  },
})

export default ThirdwebAuthHandler()
