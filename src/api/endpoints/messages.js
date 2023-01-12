import { client } from 'api/client.js';

export const messagesApi = {
  getMessages: (query) => {
    return client.get(`/messages/${query}`);
  },

  createMessage: (data) => {
    return client.post('/message/', data);
  },
};
