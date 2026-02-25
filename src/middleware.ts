import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - API routes (/api)
  // - Next.js internals (_next)
  // - Static files (files with extensions like .png, .jpg, .svg, etc.)
  // - Favicon and other special files
  matcher: ['/((?!api|_next|_vercel|.*\\..*|favicon.ico).*)']
};
