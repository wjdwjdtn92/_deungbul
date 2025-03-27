'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpSchema } from '@/shared/types/auth';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { signUp } from '@/features/auth';
import { useState } from 'react';
import Link from 'next/link';

export default function SignUpForm() {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(data: SignUpSchema) {
    const result = await signUp(data);
    if (result?.error) {
      setError(result.error);
      setMessage('');
    } else if (result?.message) {
      setMessage(result.message);
      setError('');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 확인</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <div className="text-sm text-red-500">{error}</div>}
        {message && <div className="text-sm text-green-500">{message}</div>}
        <Button type="submit" className="w-full">
          회원가입
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        이미 계정이 있으신가요?{' '}
        <Link href="/login" className="text-primary hover:underline">
          로그인
        </Link>
      </div>
    </Form>
  );
}
