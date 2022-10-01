import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./contact.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import firstImg from "../public/images/vmsl.png"
import secImg from "../public/images/vmsl2.png"
import Image from "next/image";
import styles from "../styles/Home.module.css"


export default function Home({service=100}) {
  const router = useRouter()
  const clickHandler=()=>{
    router.push("/docs")

  }
  return (
    <div className={`${styles.home}`}>
         <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={firstImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={secImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={firstImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={secImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={firstImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={secImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={firstImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={secImg} alt="image"/></SwiperSlide>
        <SwiperSlide><Image src={firstImg} alt="image"/></SwiperSlide>
      </Swiper>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <h1>Next js application</h1>
      <Link href={`/services/${service}`}><a>services</a></Link>
      <br />
      <h6>Go to Docs Page please</h6>
      <button onClick={clickHandler}>Go Docs</button>
    </div>
  );
}
