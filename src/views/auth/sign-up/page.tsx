import { SignUpForm } from '@/widgets/auth/sign-up-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

export default function SignUpPage() {
  return (
    <div className="container flex h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
