import type { ReactNode } from 'react'

import SessionProxyProvider from './_SessionProxyProvider'

export default async function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProxyProvider>{children}</SessionProxyProvider>
}
