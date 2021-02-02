import React, { useReducer } from 'react';
import { AuthContext, IAuthState } from './auth.context';

const initialAuth: IAuthState = {
    isLogin: false,
    email: '',
};

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
            };
        }
        default: {
            return null;
        }
    }
}

const AuthProvider = (props: any) => {
    const [authState, authDispatch] = useReducer(
        reducer,
        initialAuth,
    );

    return (
        <AuthContext.Provider
        value={{ authState, authDispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
