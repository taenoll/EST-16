
import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '@/supabase/supabase';

interface User {
  id: string;
  email: string;
  nickname: string;
}

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser({
          id: user.id,
          email: user.email!,
          nickname: user.user_metadata.nickname ?? user.email!.split('@')[0],
        });
      }
    });
  }, []);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    setUser(null);
  };

  return (
    <AuthContext value={{ user, isAuth: !!user, logout }}>
      {children}
    </AuthContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error('useAuth는 AuthProvider 안에서 사용해야 합니다.');
  }

  return ctx;
}

