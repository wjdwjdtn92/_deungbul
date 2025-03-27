import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { SignUpForm } from '@/widgets/auth';

export default function SignUpView() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
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
