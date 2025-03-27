import { signUp } from '@/features/auth';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export default function SignUpForm() {
  return (
    <div className="space-y-4">
      <form action={signUp} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="name@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            비밀번호 확인
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <Button type="submit" className="w-full">
          회원가입
        </Button>
      </form>
      <div className="text-center text-sm">
        이미 계정이 있으신가요?{' '}
        <Link href="/login" className="text-primary hover:underline">
          로그인
        </Link>
      </div>
    </div>
  );
}
