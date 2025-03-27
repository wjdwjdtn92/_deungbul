import { createClient } from '@/shared/api/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signIn(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    const { message, code, status } = error;
    const searchParams = new URLSearchParams({
      message,
      code: code?.toString() ?? '',
      status: status?.toString() ?? '',
    });

    redirect(`/auth/error?${searchParams.toString()}`);
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signUp(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (password !== confirmPassword) {
    const searchParams = new URLSearchParams({
      message: '비밀번호가 일치하지 않습니다.',
      code: 'PASSWORD_MISMATCH',
      status: '400',
    });

    redirect(`/auth/error?${searchParams.toString()}`);
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
    },
  });

  if (error) {
    const { message, code, status } = error;
    const searchParams = new URLSearchParams({
      message,
      code: code?.toString() ?? '',
      status: status?.toString() ?? '',
    });

    redirect(`/auth/error?${searchParams.toString()}`);
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signOut() {
  'use server';

  const supabase = await createClient();
  await supabase.auth.signOut();

  revalidatePath('/', 'layout');
  redirect('/auth/sign-in');
}
