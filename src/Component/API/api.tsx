
import axios, { AxiosResponse } from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = (): Promise<Post[]> => {
  return axios.get<Post[]>(apiUrl)
    .then((response: AxiosResponse<Post[]>) => {
      return response.data;
    });
};
