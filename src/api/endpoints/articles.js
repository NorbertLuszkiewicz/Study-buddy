import { client } from 'api/client.js';

export const articlesApi = {
  getArticles: () => {
    return client.get('/articles/');
  },

  create: (data) => {
    return client.post('/articles/', data);
  },
};
