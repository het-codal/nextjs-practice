export default function post({ post }) {
  return (
    <>
      <h1>List of posts</h1>
      <div>
        <h2>
          {post.id}. {post.title}
        </h2>
        <p>{post.body}</p>
        <hr />
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postid: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.postid}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
