import { jwtDecode, type JwtDecodeOptions } from 'jwt-decode'
import { utils } from '@/shared/lib/utils'

export const useJwtDecode = (token: string, opts: JwtDecodeOptions) => jwtDecode(token, opts)

export const setCookie = (
  // eslint-disable-next-line no-undef
  name: cookieType,
  value: any,
  days: number = 7,
  path: string = '/',
  isSecure: boolean = false,
) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString() // 864e5 = 86400000 ms (1 day)
  if (typeof value == 'object') value = JSON.stringify(value)
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expires};path=${path};SameSite=Strict;`
  if (isSecure) cookie += 'Secure;'
  document.cookie = cookie
}

// eslint-disable-next-line no-undef
export const getCookie = (name: cookieType) => {
  const cookie =
    document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${encodeURIComponent(name)}=`))
      ?.split('=')[1] || null
  if (cookie) {
    return utils?.safeJsonParse(decodeURIComponent(cookie))
  }
  return null
}

export const deleteCookie = (name: string, path = '/') => {
  document.cookie = `${encodeURIComponent(name)}=; max-age=0; path=${path}`
}
