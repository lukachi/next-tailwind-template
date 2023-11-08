import { Metadata, Viewport } from 'next'

const env = (value?: string): string => value ?? ''

export const CONFIG = {
  APP_URL: env(process.env.NEXT_PUBLIC_URL),
  APP_NAME: env(process.env.NEXT_PUBLIC_APP_NAME),
  APP_DESCRIPTION: env(process.env.NEXT_PUBLIC_APP_DESCRIPTION),

  GITHUB_ID: env(process.env.NEXT_GITHUB_ID),
  GITHUB_SECRET: env(process.env.NEXT_GITHUB_SECRET),
  GOOGLE_ID: env(process.env.NEXT_GOOGLE_ID),
  GOOGLE_SECRET: env(process.env.NEXT_GOOGLE_SECRET),
} as const

export const METADATA: Metadata = {
  icons: {
    icon: '/branding/favicon-32x32.png',
    apple: '/branding/apple-touch-icon.png',
  },

  metadataBase: new URL(CONFIG.APP_URL),
  description: CONFIG.APP_DESCRIPTION,
  applicationName: CONFIG.APP_NAME,
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

export const VIEWPORT: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,

  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
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

export const createViewport = (): Viewport => {
  return {
    ...VIEWPORT,
  }
}
