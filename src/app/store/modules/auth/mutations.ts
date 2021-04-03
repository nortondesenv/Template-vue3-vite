import { MutationTree } from 'vuex';
import { AuthState, initialState } from './state';
import { Types, Login } from './types';

export const mutations: MutationTree<AuthState> = {
    [Types.LOGIN]: (state, action: Login) => {
        const item = action.payload;
        state.token = item;
    },
    [Types.LOGOUT]: state => {
        const initial = initialState();
        state.token = initial.token;
    },
};
