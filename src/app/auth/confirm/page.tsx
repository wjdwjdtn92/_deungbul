import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export default function ConfirmPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">이메일을 확인해 주세요</h1>

      <div className="text-center max-w-md space-y-2">
        <p>
          입력하신 이메일 주소로 확인 링크를 보냈습니다.
          <br />
          이메일을 확인하고 링크를 클릭하여 회원가입을 완료해 주세요.
        </p>
        <p className="text-sm text-muted-foreground">
          이메일이 보이지 않나요? 스팸 메일함을 확인해 주세요.
        </p>
      </div>

      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/auth/sign-in">로그인 페이지로 이동</Link>
        </Button>
      </div>
    </div>
  );
}
