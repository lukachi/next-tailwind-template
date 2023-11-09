import '@/styles/index.scss'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { getServerSession } from 'next-auth'
import type { ReactNode } from 'react'

import { createMetadata, createViewport } from '@/config'
import { I18nProviderClient } from '@/locales/client'
import { AuthProvider } from '@/modules/Auth'

import { ToastsManager } from '../../components/common'

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
  const session = await getServerSession()

  return (
    <html lang={params.locale}>
      <body
        className={[montserrat.className, 'dark', 'text-foreground', 'bg-background'].join(' ')}
      >
        <I18nProviderClient locale={params.locale} fallback={<div />}>
          <AuthProvider session={session}>{children}</AuthProvider>
          <ToastsManager />
        </I18nProviderClient>
      </body>
    </html>
  )
}
