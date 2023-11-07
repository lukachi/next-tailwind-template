'use client'

import '@/common/toasts/styles.scss'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import isObject from 'lodash/isObject'
import { ReactElement, useCallback, useMemo } from 'react'
import { toast, type TypeOptions } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

import { DefaultToast } from '@/common'
import { useI18n } from '@/locales/client'
import { NotificationObjectPayload } from '@/types'

const NOTIFICATION_TYPE = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
  default: 'default',
}

const MINUTE = 60 * 1000

export const useNotification = () => {
  const t = useI18n()

  const defaultTitles = useMemo(
    () => ({
      [NOTIFICATION_TYPE.success]: t('notifications.default-title-success'),
      [NOTIFICATION_TYPE.error]: t('notifications.default-title-error'),
      [NOTIFICATION_TYPE.warning]: t('notifications.default-title-warning'),
      [NOTIFICATION_TYPE.info]: t('notifications.default-title-info'),
      [NOTIFICATION_TYPE.default]: t('notifications.default-title-default'),
    }),
    [t],
  )

  const defaultMessages = useMemo(
    () => ({
      [NOTIFICATION_TYPE.default]: t('notifications.default-message-default'),
      [NOTIFICATION_TYPE.info]: t('notifications.default-message-info'),
      [NOTIFICATION_TYPE.success]: t('notifications.default-message-success'),
      [NOTIFICATION_TYPE.error]: t('notifications.default-message-error'),
      [NOTIFICATION_TYPE.warning]: t('notifications.default-message-warning'),
    }),
    [t],
  )

  const defaultIconElements = useMemo(
    () => ({
      [NOTIFICATION_TYPE.default]: <ExclamationCircleIcon />,
      [NOTIFICATION_TYPE.info]: <ExclamationCircleIcon />,
      [NOTIFICATION_TYPE.success]: <ExclamationCircleIcon />,
      [NOTIFICATION_TYPE.error]: <ExclamationCircleIcon />,
      [NOTIFICATION_TYPE.warning]: <ExclamationCircleIcon />,
    }),
    [],
  )

  const showToast = useCallback(
    (
      messageType = NOTIFICATION_TYPE.default,
      payload?: string | NotificationObjectPayload | unknown,
    ) => {
      let title = ''
      let message = ''
      let IconElement: ReactElement | undefined

      if (isObject(payload)) {
        const msgPayload = payload as NotificationObjectPayload

        title = msgPayload.title || ''
        message = msgPayload.message
        IconElement = msgPayload?.IconElement
      } else if (payload) {
        message = payload as string
      } else {
        message = defaultMessages[messageType]
      }

      if (!title) {
        title = defaultTitles[messageType]
      }
      if (!IconElement) {
        IconElement = defaultIconElements[messageType]
      }

      return toast(
        () => <DefaultToast title={title} message={message} IconElement={IconElement} />,
        {
          toastId: `${messageType}-${uuidv4()}`,
          icon: false,
          type: {
            default: NOTIFICATION_TYPE.default,
            info: NOTIFICATION_TYPE.info,
            success: NOTIFICATION_TYPE.success,
            error: NOTIFICATION_TYPE.error,
            warning: NOTIFICATION_TYPE.warning,
          }[messageType] as TypeOptions,
          className: 'default-toast',
          autoClose: MINUTE / 2,
          closeOnClick: false,
        },
      )
    },
    [defaultIconElements, defaultMessages, defaultTitles],
  )

  const removeToast = useCallback((toastId: string) => {
    toast.dismiss(toastId)
  }, [])

  return {
    showToast,
    removeToast,
  }
}
