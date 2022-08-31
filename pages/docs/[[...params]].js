import Link from "next/link";
import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params } = router.query;
  // console.log(params?.length);

  if (params?.length == 1) {
    return (
      <>
        <h1>details of {params[0]}</h1>
      </>
    );
  } else if (params?.length == 2) {
    return (
      <>
        <h1>
          Documentation of {params[0]} and concepts of {params[1]}
        </h1>
      </>
    );
  }

  return (
    <>
      <h1>default {params?.length}</h1>
      <Link href="/docs/documentation">Documentation</Link>
      <br />
      <Link href="/docs/documentation/concepts">Concepts</Link>
      <br />
    </>
  );
}
export default Docs;
