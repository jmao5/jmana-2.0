// src/components/common/Header.tsx
"use client";

import { useAuthStore } from "@/lib/store/auth.store";
import { useThemeStore } from "@/lib/store/theme.store";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useThemeStore();
  const { user, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 border-b bg-light-main dark:bg-dark-main">
      <div className="app-container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {user ? (
            <button
              onClick={() => logout()}
              className="rounded-full bg-point px-4 py-2 text-white"
            >
              로그아웃
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-point px-4 py-2 text-white"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
