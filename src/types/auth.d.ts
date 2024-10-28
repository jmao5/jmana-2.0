export interface User {
  id: string
  email: string
  name: string
  profileImage?: string
  role: 'USER' | 'ADMIN'
  createdAt: string
  updatedAt: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials {
  email: string
  password: string
  passwordConfirm: string
  name: string
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
}

export interface TokenPayload {
  sub: string
  email: string
  role: string
  iat: number
  exp: number
}
