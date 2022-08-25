import { useRouter } from "next/router";
import { useState } from "react";
function ServiceDetails({ post }) {
  //   console.log(post.body);
  const router = useRouter();
  const serviceId = router.query.serviceDetails;

  return (
    <>
      <h1>Service Detailses = {serviceId}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default ServiceDetails;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await response.json();
  const paths = post.map((pst) => {
    return { params: { serviceDetails: `${pst.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // console.log(params)

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.serviceDetails}`
  );
  const cmntId = await res.json();
  return {
    props: {
      post: cmntId,
    },
  };
}
