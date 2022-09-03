import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from "next/link";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import firstImg from "../../public/images/vmsl.png";
import secImg from "../../public/images/vmsl2.png";
import Image from "next/image";
import { useRouter } from "next/router";
function Contact({ data }) {
  // console.log(data);
  const router = useRouter();
  const handleClick = (names) => {
    router.push(`/contact/${names}`);
  };

  return (
    <>
      {data?.map((dat) => {
        return (
          <div key={dat?.id}>
            {/* <Link href={`/contact/${dat.name}`}>
            
            
            {dat.name}
            
            </Link> */}
            <h3 onClick={() => handleClick(dat?.name)}>{dat?.name} </h3>
          </div>
        );
      })}
    </>
  );
}
export default Contact;

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:4000/user");
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }
export async function getServerSideProps(){
  const res=await axios(`http://localhost:4000/user`)
  return {
    props: {
      data: res.data
    },
  }
 
}