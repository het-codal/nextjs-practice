import { useRouter } from "next/router";
export default function post({ post }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading......</h1>;
  }
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
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.postid}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
