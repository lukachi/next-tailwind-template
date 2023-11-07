'use client'

import { bus, BusEvents } from '@/helpers'

export default function TestToast() {
  return <button onClick={() => bus.emit(BusEvents.Success, 'SUCCESS')}>show toast</button>
}
