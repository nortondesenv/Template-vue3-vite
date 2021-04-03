import { IToken } from '@/app/core/domain/entities/Token';

export enum Types {
    LOGOUT = 'auth/logout',
    LOGIN = 'auth/login',
}

export class Login implements FluxStandardAction {
    type = Types.LOGIN;
    constructor(public payload: IToken) {}
}

export class Logout implements FluxStandardAction {
    type = Types.LOGOUT;
}
