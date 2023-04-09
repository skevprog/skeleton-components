import useSWR from 'swr';
import { getPostsByUserId, postsUrlEndpoint } from '../../../api/postsApi'
import Post from '../PostItem'
import SkeletonPost from '../../Skeletons/SkeletonPost';

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
      content =  [...Array(10).keys()].map(i => <SkeletonPost key={i} />)
   } else if (error) {
      content = <p>{error.message}</p>
   } else {
      content = (
         <main>
            {posts.map((post: Post) => (
               <Post post={post} key={post.id} />
            ))}
         </main>)
   }

   return content;
}

export default PostsList;
