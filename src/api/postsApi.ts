import axios from 'axios'

const postsApi = axios.create({
   baseURL: 'http://localhost:3500',
})

export const postsUrlEndpoint = '/posts'

export const getPostsByUserId = async (url: string, userId: number) => {
   try {
      const { data } = await postsApi.get(`${url}?userId=${userId}`)

      return data
   } catch (error) {
      throw error
   }
}
