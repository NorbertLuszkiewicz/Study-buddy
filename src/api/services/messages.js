import { useMutation, useQuery, useQueryClient } from 'react-query';
import { messagesApi } from 'api/endpoints/messages.js';

export const useGetMessages = (email) => {
  return useQuery(
    ['messages', email],
    async () => {
      const query = `?email=${email}`;
      const response = await messagesApi.getMessages(query);
      return response.data;
    },
    { staleTime: 30 * 60 * 1000 }
  );
};

export const useCreateMessage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ['messages', 'create'],
    async ({ author, title, description, className }) => {
      if (!title || !description) return;
      const body = {
        author,
        title,
        description,
        class: className,
      };

      const response = await messagesApi.createMessage(body);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('messages');
      },
    }
  );
};
