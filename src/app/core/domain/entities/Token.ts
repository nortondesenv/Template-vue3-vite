export interface IToken {
  accessToken: string
  tokenType: string
  expiresIn: number
  refreshToken: string
  refreshTokenExpiresIn: Date
}
