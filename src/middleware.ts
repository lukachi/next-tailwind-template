import { stackMiddlewares } from '@/helpers'
import { localeMiddleware } from '@/middlewares'

export default stackMiddlewares([localeMiddleware])

export const config = {
  matcher: ['/((?!_next|.*\\\\..*).*)'],
}
