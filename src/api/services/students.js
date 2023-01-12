import { useMutation, useQuery, useQueryClient } from 'react-query';
import { studentsApi } from 'api/endpoints/students.js';

export const useGetStudent = (name) => {
  return useQuery(
    ['student', name],
    async () => {
      const query = name ? `?class=${name}` : '';
      const response = await studentsApi.getStudent(query);
      return response.data;
    },
    { staleTime: 10 * 60 * 1000 }
  );
};

export const useGetStudents = () => {
  return useQuery(
    ['students'],
    async () => {
      const response = await studentsApi.getStudents();
      return response.data;
    },
    { staleTime: 10 * 60 * 1000 }
  );
};

export const useRemoveStudentClass = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['student', 'remove'],
    async (data) => {
      const response = await studentsApi.removeStudentClass(data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('student');
        queryClient.invalidateQueries('user');
        queryClient.invalidateQueries('class');
      },
    }
  );
};
