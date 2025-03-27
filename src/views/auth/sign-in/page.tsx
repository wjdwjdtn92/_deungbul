import { SignInForm } from '@/widgets/auth/sign-in-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

export default function LoginPage() {
  return (
    <div className="container flex h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
