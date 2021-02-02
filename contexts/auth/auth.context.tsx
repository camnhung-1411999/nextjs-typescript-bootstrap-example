import { createContext } from 'react';

export interface IAuthState {
    isLogin: boolean;
    email: string;
}

interface AuthContextProps{
    authState: IAuthState;
    authDispatch: Function;
}

export const AuthContext = createContext({} as AuthContextProps);
