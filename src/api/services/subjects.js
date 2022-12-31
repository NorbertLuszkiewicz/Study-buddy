import { useMutation, useQuery, useQueryClient } from 'react-query';
import { subjectsApi } from 'api/endpoints/subjects.js';

export const useGetSubjects = (email) => {
  return useQuery(
    ['subjects', email],
    async () => {
      const query = `?email=${email}`;
      const response = await subjectsApi.getSubjects(query);
      return response.data;
    },
    { staleTime: 30 * 60 * 1000 }
  );
};

export const useAddSubject = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['subjects', 'create'],
    async (body) => {
      const response = await subjectsApi.addSubject(body);
      return response.data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries('subjects');
        queryClient.invalidateQueries('user');
        return { ...data, isError: false };
      },
      onError: (error) => {
        return { ...error, isError: true };
      },
    }
  );
};

export const useCreateGrade = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['grade', 'create'],
    async (data) => {
      const response = await subjectsApi.createGrade(data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('subjects');
      },
    }
  );
};

export const useCreateExam = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['exam', 'create'],
    async (data) => {
      const response = await subjectsApi.createExam(data);
      return response.data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries('student');
        queryClient.invalidateQueries('teacher');
        return { ...data, isError: false };
      },
      onError: (error) => {
        return { ...error, isError: true };
      },
    }
  );
};
