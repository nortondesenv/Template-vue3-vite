import { IAccount } from '@/app/core/domain/entities/Account'
import { IToken } from '@/app/core/domain/entities/Token'

export interface AuthState {
  accountAuth: IAccount | null
  token: IToken | null
}

export const initialState = (): AuthState => {
  return {
    accountAuth: null,
    token: null,
  }
}
