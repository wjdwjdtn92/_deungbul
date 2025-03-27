import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          안전한 귀가 길잡이 <br className="hidden sm:inline" />
          등불과 함께하세요
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          등불은 안전한 귀가를 위한 길잡이 서비스입니다. <br />
          주변의 안전 시설물을 확인하고, 안전한 귀가 경로를 찾아보세요.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/map">지도 보기</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/wiki">위키 보기</Link>
        </Button>
      </div>
    </div>
  );
}
