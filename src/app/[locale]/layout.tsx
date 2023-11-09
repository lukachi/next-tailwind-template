import '@/styles/index.scss'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import type { ReactNode } from 'react'

import { ToastsManager } from '@/components'
import { createMetadata, createViewport } from '@/config'
import { I18nProviderClient } from '@/locales/client'
import { AuthProvider } from '@/modules/Auth'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = createMetadata('Home')

export const viewport = createViewport()

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body
        className={[montserrat.className, 'dark', 'text-foreground', 'bg-background'].join(' ')}
      >
        <I18nProviderClient locale={params.locale} fallback={<div />}>
          <AuthProvider>{children}</AuthProvider>
          <ToastsManager />
        </I18nProviderClient>
      </body>
    </html>
  )
}
