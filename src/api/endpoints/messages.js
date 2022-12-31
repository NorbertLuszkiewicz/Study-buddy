import { client } from 'api/client.js';

export const messagesApi = {
  getMessages: () => {
    return client.get('/messages/');
  },

  createMessage: (data) => {
    return client.post('/message/', data);
  },
};
