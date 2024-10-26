// src/components/common/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">이용약관</a>
            <a href="#" className="hover:text-gray-900">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-900">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
