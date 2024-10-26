// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 보호된 경로 설정
const protectedRoutes = ["/", "/profile"]; // discover는 제외
const publicRoutes = ["/login", "/signup"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken");

  // discover 페이지는 임시로 접근 가능하도록 설정
  if (pathname.startsWith("/discover")) {
    return NextResponse.next();
  }

  // 보호된 경로에 토큰 없이 접근하는 경우
  if (!token && protectedRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 로그인된 상태에서 로그인/회원가입 페이지 접근 시
  if (token && publicRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/discover";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
