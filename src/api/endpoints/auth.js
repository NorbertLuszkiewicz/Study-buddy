import { client } from 'api/client.js';

export const authApi = {
  login: (email, password) => {
    return client.put('/login/', {
      email,
      password,
    });
  },

  me: (data) => {
    return client.put('/me/', data);
  },
};
