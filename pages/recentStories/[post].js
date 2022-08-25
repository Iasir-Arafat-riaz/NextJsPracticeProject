import { useRouter } from "next/router";

function DynamicPost({ post }) {
  const router = useRouter();
  console.log(post)
  // if (router.isFallback) {
  //   return <h1>Loading.....</h1>;
  // }

  return <h1>dynamic {post?.body}</h1>;
}
export default DynamicPost;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { post: "1" },
      },
      {
        params: { post: "2" },
      },
      {
        params: { post: "3" },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:4000/posts/${params.post}`
  );
  const data = await res.json();
  console.log(data.id);
  if (!data.id) {
    return { NotFound: true };
  }
  return {
    props: {
      post: data,
    },
    revalidate:10,
  };
}
