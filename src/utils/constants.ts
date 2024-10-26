export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
    VERIFY_EMAIL: '/auth/verify-email',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
    CHANGE_PASSWORD: '/user/change-password',
  },
} as const;

export const AUTH_ERROR_MESSAGES = {
  INVALID_CREDENTIALS: '이메일 또는 비밀번호가 올바르지 않습니다.',
  EMAIL_EXISTS: '이미 존재하는 이메일입니다.',
  WEAK_PASSWORD: '비밀번호는 8자 이상이어야 하며, 문자와 숫자를 포함해야 합니다.',
  PASSWORDS_NOT_MATCH: '비밀번호가 일치하지 않습니다.',
  INVALID_TOKEN: '유효하지 않은 토큰입니다.',
  SESSION_EXPIRED: '세션이 만료되었습니다. 다시 로그인해주세요.',
} as const;
