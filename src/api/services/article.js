import { useMutation, useQuery, useQueryClient } from 'react-query';
import { articlesApi } from 'api/endpoints/articles.js';

export const useGetArticles = () => {
  return useQuery(
    ['articles'],
    async () => {
      const response = await articlesApi.getArticles();
      return response.data;
    },
    { staleTime: 30 * 60 * 1000 }
  );
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['articles', 'create'],
    async (data) => {
      const response = await articlesApi.create(data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('articles');
      },
    }
  );
};
