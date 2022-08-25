import useSWR from "swr";

const featecher = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
  const data = await res.json();
  return data;
};

const DashboardSwr = () => {
  const { data, error } = useSWR("dashDatas", featecher);
  console.log(data);

  return (
    <>
      <h1>SWR</h1>
      <h2>Subscriber {data.subscriber}</h2>
    </>
  );
};
export default DashboardSwr;
