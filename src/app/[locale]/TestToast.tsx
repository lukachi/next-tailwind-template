'use client'

import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { signIn, signOut, useSession } from 'next-auth/react'

import { bus, BusEvents } from '@/helpers'

export default function TestToast() {
  const session = useSession()

  return (
    <Card>
      <CardHeader>{JSON.stringify(session)}</CardHeader>
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

        <Button color='success' className='font-bold' radius='sm' onClick={() => signIn()}>
          SIGN IN
        </Button>
        <Button color='danger' className='font-bold' radius='sm' onClick={() => signOut()}>
          SIGN OUT
        </Button>
      </CardBody>
    </Card>
  )
}
