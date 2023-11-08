import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'

import type { MiddlewareFactory } from '@/helpers'

const DEFAULT_LOCALE = 'en'
const ACCEPTED_LOCALES = [DEFAULT_LOCALE]

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

const i18nMiddleware = createI18nMiddleware<typeof ACCEPTED_LOCALES>({
  locales: [DEFAULT_LOCALE],
  defaultLocale: DEFAULT_LOCALE,

  urlMappingStrategy: 'rewrite',
  resolveLocaleFromRequest: request => {
    const locale = localeFromRequest(request) ?? DEFAULT_LOCALE

    if (ACCEPTED_LOCALES.includes(locale)) return locale

    return DEFAULT_LOCALE
  },
})

/**
 * Locale middleware should be placed and called last in the {@link stackMiddlewares} helper
 * @param next
 */
export const localeMiddleware: MiddlewareFactory = next => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    await next(request, event)

    // FIXME: get response from i18nMiddleware, place in request and use next()
    return i18nMiddleware(request)
  }
}
