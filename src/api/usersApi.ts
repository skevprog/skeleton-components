import axios from 'axios';
import { delay } from '../utils';

const usersApi = axios.create({
   baseURL: 'http://localhost:3500'
})

export const usersUrlEndpoint = '/users'

export const getUsers = async () => {
   try {
      await delay(1800);
      const { data } = await usersApi.get(usersUrlEndpoint)

      return data;
   } catch (error) {
      throw error;
   }
}
