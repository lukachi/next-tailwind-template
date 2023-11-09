'use client'

import type { User } from '@thirdweb-dev/auth'
import { useUser } from '@thirdweb-dev/react'
import { createContext, ReactNode, useMemo } from 'react'

export const UserContext = createContext<{
  isLoggedIn: boolean

  user?: User
}>({
  isLoggedIn: false,
})

export default function UserProvider({ children }: { children: ReactNode }) {
  const { isLoggedIn, user } = useUser()

  // TODO: should "refresh token" be implemented for oauth?

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,

        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
