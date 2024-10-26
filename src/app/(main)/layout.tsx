// src/app/(main)/layout.tsx

// src/app/(main)/layout.tsx
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto py-6 px-4">{children}</main>
      <Footer />
    </div>
  );
}
