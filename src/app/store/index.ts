import { createStore } from 'vuex'

// modules
import * as auth from './modules/auth'

export interface RootState {
  auth: auth.AuthState
}

const Store = createStore({
  modules: {
    auth: auth.store,
  },
})

export default Store