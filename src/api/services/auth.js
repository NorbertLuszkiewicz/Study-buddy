import { useMutation, useQuery, useQueryClient } from 'react-query';
import { authApi } from 'api/endpoints/auth.js';

export const useGetUser = () => {
  return useQuery(
    ['user'],
    async () => {
      const email = localStorage.getItem('email');
      const response = await authApi.me({ email });
      return response.data;
    },
    {
      cacheTime: 2 * 60 * 1000,
      retry: false,
      onError: (error) => {
        if (error.status === 403) {
          localStorage.removeItem('token');
          localStorage.removeItem('email');
        }
      },
    }
  );
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ['user'],
    async (data) => {
      const response = await authApi.login(data);
      return response.data;
    },
    {
      onSuccess: (user) => queryClient.setQueryData(['user'], user),
    }
  );
};
