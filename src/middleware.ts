import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'ar'],

//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale: 'en'
// });

import createIntlMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'en';

  // Step 2: Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'ar'],
    defaultLocale
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response
  response.headers.set('Accept-Language', defaultLocale);

  return response;
}




export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};