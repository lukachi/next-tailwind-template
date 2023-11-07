import { type ReactElement } from 'react'

export type NotificationObjectPayload = {
  title?: string
  message: string
  IconElement?: ReactElement
}

export type NotificationPayload = string | NotificationObjectPayload

export type NotificationTxType = 'pending' | 'success' | 'error'
