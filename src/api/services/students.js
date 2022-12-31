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

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['students', 'create'],
    async (data) => {
      const response = await studentsApi.createStudent(data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('articles');
      },
      onCompleted: (e) => {
        console.log(e, 'wwwww');
      },
    }
  );
};
