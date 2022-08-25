import Link from "next/link";

function Services({ posts }) {
  // console.log(posts);
  console.log("generated data");
  return (
    <>
      <h1>services and posts</h1>
      {posts.map((post, index) => {
        return (
          <h3 key={index}>
            {" "}
            <Link href={`services/${post.id}`} passHref>
              {post.title}
            </Link>{" "}
          </h3>
        );
      })}
    </>
  );
}
export default Services;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await response.json();

  return {
    props: { posts: post },
  };
}
