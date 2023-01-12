import { useMutation, useQueryClient } from 'react-query';
import { notesApi } from 'api/endpoints/notes.js';

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ['notes', 'create'],
    async (body) => {
      const response = await notesApi.createNote(body);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes');
        queryClient.invalidateQueries('user');
      },
    }
  );
};

export const useRemoveNote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ['notes', 'remove'],
    async (body) => {
      const response = await notesApi.removeNote(body);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes');
        queryClient.invalidateQueries('user');
      },
    }
  );
};
