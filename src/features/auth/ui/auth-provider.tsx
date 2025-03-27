'use client';

import { useEffect } from 'react';
import { createClient } from '@/shared/api/supabase/client';
import { useAuthStore } from '../model/auth-store';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      const supabase = createClient();

      // 초기 세션 체크
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);

      // 인증 상태 변경 구독
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => {
        subscription.unsubscribe();
      };
    };

    initializeAuth();
  }, [setUser, setLoading]);

  return children;
}
