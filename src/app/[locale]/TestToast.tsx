'use client'

import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'

import { bus, BusEvents } from '@/helpers'
import { useUser } from '@/modules/Auth'

export default function TestToast() {
  const { userDetails, signOut, signIn } = useUser()

  return (
    <Card>
      <CardHeader className='flex gap-24'>
        {userDetails.image && <Avatar src={userDetails.image} />}

        <div className='flex flex-col'>
          <p className='text-md'>{userDetails.name}</p>
        </div>
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
