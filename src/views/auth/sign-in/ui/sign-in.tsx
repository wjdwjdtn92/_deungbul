import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { SignInForm } from '@/widgets/auth/ui/sign-in-form';

export default function SignInView() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
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
