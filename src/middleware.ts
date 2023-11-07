import { NextRequest } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'

const DEFAULT_LOCALE = 'en'
const ACCEPTED_LOCALES = [DEFAULT_LOCALE]

type SupportedLocale = (typeof ACCEPTED_LOCALES)[number] | null

const I18nMiddleware = createI18nMiddleware<typeof ACCEPTED_LOCALES>({
  locales: [DEFAULT_LOCALE],
  defaultLocale: DEFAULT_LOCALE,

  urlMappingStrategy: 'rewrite',
  resolveLocaleFromRequest: request => {
    const locale = localeFromRequest(request) ?? DEFAULT_LOCALE

    if (ACCEPTED_LOCALES.includes(locale)) return locale

    return DEFAULT_LOCALE
  },
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next|.*\\\\..*).*)'],
}

function localeFromRequest(request: NextRequest) {
  let locale = request.cookies.get('Next-Locale')?.value ?? null

  if (!locale) {
    locale = negotiateAcceptLanguage(request)
  }

  return locale
}

function negotiateAcceptLanguage(request: NextRequest) {
  const header = request.headers.get('Accept-Language')
  const locale = header?.split(',')?.[0]?.split('-')?.[0]
  return locale ?? null
}
