'use client';

import { useEffect } from 'react';
import { Button } from '@/shared/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">문제가 발생했습니다</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <div className="flex gap-4">
        <Button
          onClick={() => (window.location.href = '/auth/sign-in')}
          variant="outline"
        >
          로그인 페이지로 이동
        </Button>
        <Button onClick={() => reset()}>다시 시도</Button>
      </div>
    </div>
  );
}
