'use client'

import { Badge } from '@nextui-org/badge'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { ConnectWallet } from '@thirdweb-dev/react'

import { bus, BusEvents } from '@/helpers'
import { useUser } from '@/modules/Auth'

export default function TestToast() {
  const { user, isLoggedIn } = useUser()

  return (
    <Card>
      <CardHeader className='flex gap-24'>
        {user?.address && <Badge color='success'>{user.address}</Badge>}
      </CardHeader>
      <Divider />
      <CardBody>
        <Button
          color='primary'
          className='font-bold'
          radius='sm'
          onClick={() => bus.emit(BusEvents.Success, 'SUCCESS')}
        >
          BUY
        </Button>

        <ConnectWallet theme={'dark'} modalSize={'wide'} />
      </CardBody>
    </Card>
  )
}
