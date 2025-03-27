import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/map'];
const authRoutes = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  // 쿠키를 사용하여 Supabase 클라이언트 생성
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          requestHeaders.append('Set-Cookie', `${name}=${value}`);
        },
        remove(name: string, options: any) {
          requestHeaders.append('Set-Cookie', `${name}=; Max-Age=0`);
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const path = new URL(request.url).pathname;

  // 보호된 라우트 체크
  if (protectedRoutes.includes(path) && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 이미 로그인된 사용자가 인증 페이지 접근 시 리다이렉트
  if (authRoutes.includes(path) && session) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
