import { IToken } from '@/app/core/domain/entities/Token'

export interface AuthState {
  token: IToken | null
}

export const initialState = (): AuthState => {
  return {
    token: null,
  }
}
