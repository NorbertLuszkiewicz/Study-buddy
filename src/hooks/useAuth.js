import React, { useContext, useEffect, useState } from 'react';
import { useError } from 'hooks/useError.js';
import { authApi } from 'api/endpoints/auth.js';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('Loading');
  const { dispatchError } = useError();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token && email) {
      (async () => {
        try {
          const { data } = await authApi.me({ email });
          setUser(data.user);
        } catch (e) {
          setUser(null);
          console.log(e);
        }
      })();
    } else {
      setUser(null);
    }
  }, []);

  // const [user, setUser] = useState('Loading');
  // const { dispatchError } = useError();
  // const { data, mutate, isError, isSuccess } = useMe();

  // const token = localStorage.getItem('token');
  // const email = localStorage.getItem('email');
  // if (token && email) {
  //   mutate({ email });
  //   if (isSuccess) setUser(data.user);
  //   if (isError) setUser(null);
  // } else {
  //   setUser(null);
  // }

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await authApi.login(email, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.user.email);
    } catch (error) {
      setUser(null);
      dispatchError(error);
    }
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
