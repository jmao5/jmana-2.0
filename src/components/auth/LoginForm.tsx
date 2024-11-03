'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { getCookie } from 'cookies-next'
import defaultOmokImage from '@/public/skins/defaultOmok.png'
import Image from 'next/image'

const KAKAO_LOGIN_URL =
  `https://kauth.kakao.com/oauth/authorize?` +
  `response_type=code&` +
  `client_id=${process.env.NEXT_PUBLIC_KAKAO_LOGIN_CLIENT_ID}&` +
  `redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_DEPLOY_ENDPOINT}` +
  `/login/kakao/oauth`

const LoginForm = () => {
  const router = useRouter()

  useEffect(() => {
    const token = getCookie('token')
    if (token) {
      router.replace('/')
    }
  }, [router])

  return (
    <main className="flex h-full flex-col items-center justify-center p-2">
      <section className="flex grow flex-col items-center justify-center text-center">
        <div className="w-48 rounded-full bg-yellow-50">
          <Image src={defaultOmokImage} className="p-4" alt="로고 이미지" />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl">취향저격 컨텐츠의 시작</h1>
          <p className="mt-4 text-lg text-dark-gray">
            당신의 취향에 맞는 만화와 소설을 <br />
            발견하고 구독하는 특별한 경험
          </p>
        </div>
      </section>
      <section className="w-full justify-self-end p-4">
        <a
          className="relative flex w-full cursor-pointer select-none rounded-2xl bg-[#FFEB06] p-3"
          href={KAKAO_LOGIN_URL}
        >
          <p className="w-full text-center font-extrabold text-[#6A2346]">
            카카오로 시작하기
          </p>
        </a>
      </section>
    </main>
  )
}

export default LoginForm
