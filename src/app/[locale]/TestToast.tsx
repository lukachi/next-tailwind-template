'use client'

import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'

import { bus, BusEvents } from '@/helpers'

export default function TestToast() {
  return (
    <Card>
      <CardHeader>Testing Toast</CardHeader>
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
      </CardBody>
    </Card>
  )
}
