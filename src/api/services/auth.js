import { useMutation, useQueryClient } from 'react-query';
import { authApi } from 'api/endpoints/auth.js';

export const useLogin = () => {
  const queryClient = useQueryClient('user');
  return useMutation(
    ['user'],
    async ({ email, password }) => {
      const response = await authApi.login(email, password);
      return response.data;
    },
    {
      onSuccess: (data) => {
        return data;
      },
      onError: (error) => {
        return error;
      },
    }
  );
};

export const useMe = () => {
  return useMutation(
    ['user'],
    async (data) => {
      const response = await authApi.me(data);
      return response.data;
    },
    {
      onSuccess: (data) => {
        return data;
      },
      onError: (error) => {
        return error;
      },
      retryDelay: 5 * 1000 * 60,
    }
  );
};
