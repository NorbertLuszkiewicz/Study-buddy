import { client } from 'api/client.js';

export const notesApi = {
  createNote: (data) => {
    return client.post('/note/', data);
  },

  removeNote: (data) => {
    return client.put('/note/', data);
  },
};
