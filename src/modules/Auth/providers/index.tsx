import { getServerSession } from 'next-auth'
import type { ReactNode } from 'react'

import SessionProxyProvider from './_SessionProxyProvider'

export default async function AuthProvider({ children }: { children: ReactNode }) {
  const session = await getServerSession()

  return <SessionProxyProvider session={session}>{children}</SessionProxyProvider>
}
