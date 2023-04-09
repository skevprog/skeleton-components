import useSWR from 'swr';
import { getPostsByUserId, postsUrlEndpoint } from '../../../api/postsApi'
import Post from '../PostItem'

function PostsList({ userId }: { userId: User['id'] }) {

   const { data: posts, isLoading, error } = useSWR([postsUrlEndpoint, userId], ([url, userId]) => getPostsByUserId(url, userId), {
      revalidateOnFocus: false
   })

   let content

   if (userId === 0) {
      content = <p className="loading">
         Select an employee to view posts
      </p>
   } else if (isLoading) {
      content =  <p className="loading">Loading...</p>
   } else if (error) {
      content = <p>{error.message}</p>
   } else {
      content = (
         <main>
            {posts.map((post: Post) => (
               <Post post={post} />
            ))}
         </main>)
   }

   return content;
}

export default PostsList;
