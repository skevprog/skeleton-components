import useSWR from 'swr';
import { getPostsByUserId, postsUrlEndpoint } from '../../../api/postsApi'

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
      content = <h1>Loading...</h1>
   } else if (error) {
      content = <p>{error.message}</p>
   } else {
      content = (
         <main>
            {posts.map((post: Post) => (
               <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
               </div>))}
         </main>
      )
   }

   return content;
}

export default PostsList;
