import { Button } from '@/shared/ui/button';
import Link from 'next/link';

interface Props {
  searchParams: {
    message?: string;
    code?: string;
    status?: string;
  };
}

const ERROR_MESSAGES: Record<string, string> = {
  // 자주 발생하는 인증 오류
  email_not_confirmed: '이메일 인증이 필요합니다. 이메일을 확인해 주세요.',
  invalid_credentials: '이메일 또는 비밀번호가 올바르지 않습니다.',
  user_not_found: '등록되지 않은 사용자입니다.',
  email_exists: '이미 등록된 이메일 주소입니다.',
  weak_password:
    '비밀번호가 너무 약합니다. 더 강력한 비밀번호를 사용해 주세요.',
  password_mismatch: '비밀번호가 일치하지 않습니다.',

  // 요청 제한 관련
  over_request_rate_limit:
    '너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해 주세요.',
  over_email_send_rate_limit:
    '이메일 전송 횟수가 초과되었습니다. 잠시 후 다시 시도해 주세요.',

  // 기본 메시지
  default: '인증 중 문제가 발생했습니다. 다시 시도해 주세요.',
};

export default function AuthErrorPage({ searchParams }: Props) {
  const { code } = searchParams;
  const errorMessage = code
    ? ERROR_MESSAGES[code] || ERROR_MESSAGES.default
    : ERROR_MESSAGES.default;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">인증 오류</h1>

      <p className="text-destructive text-center max-w-md">{errorMessage}</p>

      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/auth/sign-up">회원가입</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/sign-in">로그인</Link>
        </Button>
      </div>
    </div>
  );
}
