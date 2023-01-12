import { client } from 'api/client.js';

export const subjectsApi = {
  getSubjects: () => {
    return client.get('/subjects/');
  },

  createSubject: (data) => {
    return client.post(`/subject/`, data);
  },

  removeSubject: (data) => {
    return client.put(`/subject/`, data);
  },

  createGrade: (data) => {
    return client.post('/grade/', data);
  },

  createExam: (data) => {
    return client.put('/exam/', data);
  },
};
