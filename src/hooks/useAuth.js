import React, { useContext, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import { useError } from 'hooks/useError.js';
import { useGetUser, useLoginUser } from 'api/services/auth.js';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('Loading');
  const { dispatchError } = useError();
  const { data, isError, isSuccess } = useGetUser();
  const { mutate } = useLoginUser();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (token && email) {
      if (isSuccess) setUser(data.user);
      if (isError) setUser(null);
    } else {
      setUser(null);
    }
  }, [data, isError, isSuccess]);

  const signIn = (authData) => {
    mutate(authData, {
      onSuccess: async (loginData) => {
        setUser(loginData.user);
        localStorage.setItem('token', loginData.token);
        localStorage.setItem('email', loginData.user.email);
        redirect('/');
      },
      onError: async (error) => {
        signOut();
        dispatchError(error?.data?.errors?.message);
      },
    });
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
