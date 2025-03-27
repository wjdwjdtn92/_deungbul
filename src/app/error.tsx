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
    <div className="container flex min-h-[600px] flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">문제가 발생했습니다</h2>
      <p className="text-muted-foreground">
        죄송합니다. 예기치 않은 오류가 발생했습니다.
      </p>
      <Button onClick={() => reset()}>다시 시도</Button>
    </div>
  );
}
