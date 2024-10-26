// src/app/(main)/profile/page.tsx
'use client';

import { useAuthStore } from '@/lib/auth/auth.store';

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">프로필</h1>
      {user ? (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500">이름</h2>
              <p className="mt-1">{user.name}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">이메일</h2>
              <p className="mt-1">{user.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          로그인이 필요합니다.
        </div>
      )}
    </div>
  );
}
