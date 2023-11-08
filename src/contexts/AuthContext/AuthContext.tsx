'use client'

import { useSession } from 'next-auth/react'
import { createContext, ReactNode, useMemo } from 'react'

export const AuthContext = createContext<{
  isLoggedIn: boolean
}>({
  isLoggedIn: false,
})

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const session = useSession()

  const isLoggedIn = useMemo(() => {
    return !!session?.data?.user
  }, [session?.data?.user])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
