export interface ITokenPayload {
  iss: string
  aud: string
  data: string
  enterprise: number
  exp: number
  i_idusuario: number
  statusCliente: string
  usuario: string
}

export const tokenVoid: ITokenPayload = {
  iss: '',
  aud: '',
  data: '',
  exp: 100000000,
  i_idusuario: 0,
  statusCliente: '',
  usuario: '',
  enterprise: 0
}

/**
 * DEVUELVE LA CARGA UTIL DEL TOKEN EN UN OBJETO
 * @param token string
 * @returns ITokenPayload
 */
function parseJwt(token: string): ITokenPayload | undefined {
  const base64Url = token?.split('.')[1]

  if (base64Url) {
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/')
    if (base64) {
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      return jsonPayload && JSON.parse(jsonPayload)
    }
  }

  return undefined
}

export { parseJwt }
