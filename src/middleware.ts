import { stackMiddlewares } from '@/helpers'
import { authMiddleware, localeMiddleware } from '@/middlewares'

export default stackMiddlewares([authMiddleware, localeMiddleware])

export const config = {
  matcher: ['/((?!_next|.*\\\\..*).*)'],
}
