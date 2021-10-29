import Link from "next/link";
export default function postsList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id}. {post.title}
              </h2>
            </Link>
            <p>{post.body}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
