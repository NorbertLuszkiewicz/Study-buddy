import { client } from 'api/client.js';

export const studentsApi = {
  getStudents: () => {
    return client.get('/students/');
  },

  getStudent: (query) => {
    return client.get(`/student/${query}`);
  },

  createStudent: (data) => {
    return client.post('/student/', data);
  },

  removeStudentClass: (data) => {
    return client.put('/student/', data);
  },
};
