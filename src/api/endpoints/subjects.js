import { client } from 'api/client.js';

export const subjectsApi = {
  getSubjects: () => {
    return client.get('/subjects/');
  },

  addSubject: (data) => {
    return client.put(`/subject/`, data);
  },

  createGrade: (data) => {
    return client.post('/grade/', data);
  },

  createExam: (data) => {
    return client.put('/exam/', data);
  },
};
