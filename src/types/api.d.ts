export interface ApiResponse<T> {
  data: T
  message: string
  status: number
}

export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}

export interface PaginationParams {
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

export interface DiscoverItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  createdAt: string
  author: {
    id: string
    name: string
    profileImage?: string
  }
}

export interface DiscoverFeedResponse {
  items: DiscoverItem[]
  total: number
  page: number
  hasMore: boolean
}

// API 응답 타입 정의
export interface KakaoAuthResponse {
  success: boolean
  data: {
    userId: string
    newUser: boolean
    token: {
      accessToken: string
      refreshToken: string
      accessTokenExpireIn: number
    }
  }
}

// 요청 변수 타입 정의
export interface KakaoAuthVariables {
  authorizationCode: string
  redirectUri: string
}
