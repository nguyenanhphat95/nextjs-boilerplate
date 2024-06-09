import { redirect } from "next/navigation";
import { CustomOptionsType } from "./types"
import { isClient, isFormData, normalizePath } from "./utils";
import { AUTHENTICATION_ERROR_STATUS, ENTITY_ERROR_STATUS } from "./constants";

// let clientLogoutRequest: null | Promise<any> = null


// type EntityErrorPayload = {
//   message: string
//   errors: {
//     field: string
//     message: string
//   }[]
// }

// export class HttpError extends Error {
//   status: number
//   payload: {
//     message: string
//     [key: string]: any
//   }
//   constructor({ status, payload }: { status: number; payload: any }) {
//     super('Http Error')
//     this.status = status
//     this.payload = payload
//   }
// }


// export class EntityError extends HttpError {
//   status: 422
//   payload: EntityErrorPayload
//   constructor({
//     status,
//     payload
//   }: {
//     status: 422
//     payload: EntityErrorPayload
//   }) {
//     super({ status, payload })
//     this.status = status
//     this.payload = payload
//   }
// }

const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options?: CustomOptionsType
) => {
  let body: FormData | string | undefined = undefined;

  if (options?.body instanceof FormData) {
    body = options.body
  } else if (options?.body) {
    body = JSON.stringify(options.body)
  }

  const baseHeaders: Record<string, string> = {
    'Content-Type': isFormData(body) ? 'multipart/form-data' : 'application/json'
  }

  // if (isClient()) {
  //   const sessionToken = localStorage.getItem('sessionToken')
  //   if (sessionToken) {
  //     baseHeaders.Authorization = `Bearer ${sessionToken}`
  //   }
  // }

  const baseUrl =
    options?.baseUrl === undefined
      ? process.env.NEXT_PUBLIC_API_ENDPOINT
      : options.baseUrl

  const fullUrl = `${baseUrl}${url}`

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers
    },
    body,
    method
  })
  const payload: Response = await res.json()

  const data = {
    status: res.status,
    payload
  }

  return data;

  // // Interceptor là nời chúng ta xử lý request và response trước khi trả về cho phía component
  // if (!res.ok) {
  //   if (res.status === ENTITY_ERROR_STATUS) {
  //     throw new EntityError(
  //       data as {
  //         status: 422
  //         payload: EntityErrorPayload
  //       }
  //     )
  //   } else if (res.status === AUTHENTICATION_ERROR_STATUS) {
  //     if (isClient()) {
  //       if (!clientLogoutRequest) {
  //         clientLogoutRequest = fetch('/api/auth/logout', {
  //           method: 'POST',
  //           body: JSON.stringify({ force: true }),
  //           headers: {
  //             ...baseHeaders
  //           } as any
  //         })
  //         try {
  //           await clientLogoutRequest
  //         } catch (error) {
  //         } finally {
  //           localStorage.removeItem('sessionToken')
  //           localStorage.removeItem('sessionTokenExpiresAt')
  //           clientLogoutRequest = null
  //           location.href = '/login'
  //         }
  //       }
  //     } else {
  //       const sessionToken = (options?.headers as any)?.Authorization.split(
  //         'Bearer '
  //       )[1]
  //       redirect(`/ logout ? sessionToken = ${ sessionToken }`)
  //     }
  //   } else {
  //     throw new HttpError(data)
  //   }
  // }
  // // Đảm bảo logic dưới đây chỉ chạy ở phía client (browser)
  // if (isClient()) {
  //   if (
  //     ['auth/login', 'auth/register'].some(
  //       (item) => item === normalizePath(url)
  //     )
  //   ) {
  //     const { token, expiresAt } = (payload as any).data
  //     localStorage.setItem('sessionToken', token)
  //     localStorage.setItem('sessionTokenExpiresAt', expiresAt)
  //   } else if ('auth/logout' === normalizePath(url)) {
  //     localStorage.removeItem('sessionToken')
  //     localStorage.removeItem('sessionTokenExpiresAt')
  //   }
  // }
  // return data
}

export const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptionsType, 'body'>
  ) {
    return request<Response>('GET', url, options)
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptionsType, 'body'>
  ) {
    return request<Response>('POST', url, { ...options, body })
  },
  put<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptionsType, 'body'>
  ) {
    return request<Response>('PUT', url, { ...options, body })
  },
  delete<Response>(
    url: string,
    options?: Omit<CustomOptionsType, 'body'>
  ) {
    return request<Response>('DELETE', url, { ...options })
  }
}
