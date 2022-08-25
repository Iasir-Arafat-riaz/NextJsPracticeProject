import { useEffect, useState } from "react";

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState(null);
  useEffect(()=>{
    const dashData = async () => {
        const res = await fetch("http://localhost:4000/dashboard");
        const data = await res.json();
        setDatas(data);
        setIsLoading(false);
      };
      dashData();
  },[])
  console.log(datas);
  if(isLoading){
    return(<h2>Loading....</h2>)
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h1>like={datas?.like}</h1>
    </>
  );
};

export default DashBoard;
