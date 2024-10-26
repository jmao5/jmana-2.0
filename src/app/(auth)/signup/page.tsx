// src/app/(auth)/signup/page.tsx
import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">회원가입</h1>
        <p className="mt-2 text-gray-600">새로운 계정을 만들어보세요</p>
      </div>
      <SignupForm />
    </div>
  );
}
