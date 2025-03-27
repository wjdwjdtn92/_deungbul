'use server';

import { createServerSupabase } from '@/shared/api/supabase';
import { signInSchema, signUpSchema } from '@/shared/types/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signUp(formData: FormData) {
  const validatedFields = signUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createServerSupabase();
  const { error } = await supabase.auth.signUp({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  });

  if (error) {
    return {
      error: {
        email: [error.message],
      },
    };
  }

  revalidatePath('/');
  redirect('/');
}

export async function signIn(formData: FormData) {
  const validatedFields = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createServerSupabase();
  const { error } = await supabase.auth.signInWithPassword({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  });

  if (error) {
    return {
      error: {
        email: ['이메일 또는 비밀번호가 올바르지 않습니다.'],
      },
    };
  }

  revalidatePath('/');
  redirect('/');
}

export async function signOut() {
  const supabase = createServerSupabase();
  await supabase.auth.signOut();
  revalidatePath('/');
  redirect('/');
}
