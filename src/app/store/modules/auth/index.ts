import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { mutations } from './mutations';
import { AuthState, initialState } from './state';

export * from './state';

export const store: Module<AuthState, RootState> = {
    state: initialState,
    mutations,
};
