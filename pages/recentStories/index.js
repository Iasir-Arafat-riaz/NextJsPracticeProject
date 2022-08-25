import { useEffect } from "react";
import { Post } from "../../components/post";

function RecentStories({ posts }) {
  return (
    <>
      <h1>Recent Stories Component</h1>
      <p>here is all recent stories</p>
      {posts.map((post, index) => {
        // console.log(index);
        return <Post key={index} {...post} />;
      })}
    </>
  );
}
export default RecentStories;

export async function getStaticProps() {
  console.log("revalidation");
  const response = await fetch("http://localhost:4000/posts");
  const post = await response.json();

  return {
    props: { posts: post.slice(0, 3) },
    revalidate: 10,
  };
}
