import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

import type { MiddlewareFactory } from '@/helpers'

const PROTECTED_ROUTES = ['/dashboard']

export const authMiddleware: MiddlewareFactory = next => {
  return async (request, event) => {
    const reqUrl = request.url

    const isRouteProtected = PROTECTED_ROUTES.some(route =>
      reqUrl.toLowerCase().includes(route.toLowerCase()),
    )

    // TODO: check if user is authenticated
    if (isRouteProtected) {
      return NextResponse.redirect('http://localhost:3000/')
    }

    return next(request, event)
  }
}
