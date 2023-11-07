import { Metadata } from 'next'

const env = (value?: string): string => value ?? ''

export const CONFIG = {
  APP_URL: env(process.env.NEXT_PUBLIC_URL),
  APP_NAME: '',
  APP_DESCRIPTION: '',
} as const

export const METADATA: Metadata = {
  metadataBase: new URL(CONFIG.APP_URL),
  description: CONFIG.APP_DESCRIPTION,
  applicationName: CONFIG.APP_NAME,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
  viewport:
    'width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0',
  creator: 'Rarimo Team',
  openGraph: {
    description: CONFIG.APP_DESCRIPTION,
    locale: 'en_GB',
    type: 'website',
    images: '/preview-card.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    description: CONFIG.APP_DESCRIPTION,
    images: '/preview-card.jpg',
  },
}

const createPageTitle = (pageName: string): string => {
  return `${pageName} | ${CONFIG.APP_NAME}`
}

export const createMetadata = (pageName: string): Metadata => {
  const title = createPageTitle(pageName)

  return {
    title,
    ...METADATA,
    openGraph: {
      ...METADATA.openGraph,
      title,
    },
    twitter: {
      ...METADATA.twitter,
      title,
    },
  }
}
