'use client'

import { FC, HTMLAttributes, ReactElement } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
  message: string
  IconElement?: ReactElement
}

const DefaultToast: FC<Props> = ({ title, message, IconElement, ...rest }) => {
    console.log('here')
  return (
      <div className='toast__body' {...rest}>
          <div className='toast__icon-wrp'>
              {IconElement}
          </div>
          <div className='toast__details'>
              <h4 className='toast__title'>{title}</h4>
              <p className='toast__message'>{message}</p>
          </div>
      </div>
  )
}

export default DefaultToast
