import { IToken } from '@/app/core/services/auth/types'

export interface AuthState {
  token: IToken | null
}

export const initialState = (): AuthState => {
  return {
    token: null,
  }
}
