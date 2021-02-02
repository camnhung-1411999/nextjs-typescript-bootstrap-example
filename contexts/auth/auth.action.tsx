import { useContext } from 'react';
import { AuthContext } from './auth.context';

const { authDispatch } = useContext(AuthContext);
export const login = (data: string) => {
  const idata = {
      i: data,
  };
  authDispatch({
    type: 'LOGIN',
    data: {
      isLogin: false,
      email: '',
    },
  });
  return idata;
};
