

function PostItem({ post }: {post: Post }) {
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <p>Post ID: {post.id}</p>
    </article>
  )
}

export default PostItem;
