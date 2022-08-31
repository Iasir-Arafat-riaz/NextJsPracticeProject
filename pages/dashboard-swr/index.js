import useSWR from "swr";

const DashboardSwr = () => {
  const fetcher = async () => {
    const res = await fetch("http://localhost:4000/dashboard");
    const data = await res.json();
    return data;
  };
  const { data, error } = useSWR("dashboard-swr", fetcher);

  return (
    <>
      <h2>Total Subscriber = {data?.subscriber}</h2>
    </>
  );
};
export default DashboardSwr;
