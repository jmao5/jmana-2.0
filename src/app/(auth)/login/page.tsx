// src/app/(auth)/login/page.tsx
import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">로그인</h1>
        <p className="mt-2 text-gray-600">서비스를 이용하려면 로그인해주세요</p>
      </div>
      <LoginForm />
    </div>
  )
}
