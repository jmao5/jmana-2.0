'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/auth/auth.store';
import { Button } from '@/components/ui/Button';

export default function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          로고
        </Link>
        
        <nav className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/discover">
                발견
              </Link>
              <Link href="/profile">
                프로필
              </Link>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => logout()}
              >
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  로그인
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">
                  회원가입
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
