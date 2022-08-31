const ContactCategory = ({ data, category }) => {
  console.log(data, category);
  return (
    <>
      <h1>category list={category}</h1>
      {data.map((dat, index) => {
        return (
          <div key={index}>
            <h2>{dat.name}</h2>
            <h6>{dat.email}</h6>
          </div>
        );
      })}
    </>
  );
};

export default ContactCategory;

export async function getServerSideProps(context) {
  const { category } = context.params;
  // const { category } = params;
  const res = await fetch(`http://localhost:4000/user?name=${category}`);
  const data = await res.json();

  return {
    props: {
      data,
      category,
    },
  };
}
