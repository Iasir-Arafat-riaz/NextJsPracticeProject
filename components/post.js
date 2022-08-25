import Link from "next/link";

export function Post({ title, id }) {
  // console.log(name);
  return (
    <h3>
      <Link href={`recentStories/${id}`}>{title}</Link>
    </h3>
  );
}
