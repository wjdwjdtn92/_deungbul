'use client';

import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { useAuthStore } from '@/features/auth/model/auth-store';
import { signOut } from '@/features/auth';

export default function Header() {
  const { user, isLoading } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block">등불</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            {!isLoading && (
              <div className="flex items-center">
                {user ? (
                  <form action={signOut}>
                    <Button variant="ghost" type="submit">
                      로그아웃
                    </Button>
                  </form>
                ) : (
                  <Button variant="ghost" asChild>
                    <Link href="/auth/sign-in">로그인</Link>
                  </Button>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
