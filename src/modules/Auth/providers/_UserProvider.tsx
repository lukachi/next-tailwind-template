'use client'

import { type User } from 'next-auth'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'
import { createContext, ReactNode, useMemo } from 'react'

export const UserContext = createContext<{
  isLoggedIn: boolean

  userDetails: User

  signIn: typeof signIn
  signOut: typeof signOut
}>({
  isLoggedIn: false,

  userDetails: {} as User,

  signIn,
  signOut,
})

export default function UserProvider({ children }: { children: ReactNode }) {
  const session = useSession()

  const userDetails = useMemo<User>(() => session?.data?.user as User, [session?.data?.user])

  const isLoggedIn = useMemo(() => {
    return !!session?.data?.user
  }, [session?.data?.user])

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,

        userDetails,

        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
