import { useContext } from 'react'

import { UserContext } from '@/modules/Auth/providers/_UserProvider'

export const useUser = () => {
  return useContext(UserContext)
}
