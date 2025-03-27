'use client';

import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { useAuthStore } from '@/features/auth/model/auth-store';
import { signOut } from '@/features/auth';

export function Header() {
  const { user, isLoading } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">등불</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/map">지도</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/wiki">위키</Link>
            </Button>
          </nav>
          <nav className="flex items-center">
            {!isLoading &&
              (user ? (
                <form action={signOut}>
                  <Button variant="ghost" type="submit">
                    로그아웃
                  </Button>
                </form>
              ) : (
                <Button variant="ghost" asChild>
                  <Link href="/login">로그인</Link>
                </Button>
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
