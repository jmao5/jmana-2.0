// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Pretendard } from '@/public/font'

export const metadata: Metadata = {
  title: {
    template: '%s | 사이트명',
    default: '사이트명',
  },
  description: '사이트 설명',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${Pretendard.className}`}
    >
      <body className={`${Pretendard.className} antialiased`}>
        <Providers>
          <div className="app-container flex flex-col bg-light-main dark:bg-dark-main">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
