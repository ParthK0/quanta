import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Simple mock authentication using a cookie
  const authSession = request.cookies.get('admin_session')?.value
  
  // Protect all routes starting with /admin, except /admin/login
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (authSession !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Auto-redirect logged-in users away from the login page
  if (request.nextUrl.pathname === '/admin/login' && authSession === 'authenticated') {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
