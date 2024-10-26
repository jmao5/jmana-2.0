// src/app/(main)/layout.tsx
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-light-main dark:bg-dark-main">
      <Header />
      <main className="flex-grow container mx-auto py-6 px-4">{children}</main>
      <Footer />
    </div>
  );
}
