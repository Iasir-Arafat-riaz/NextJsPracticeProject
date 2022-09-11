import Link from "next/link";
import React from "react";
import Image from "next/image";
import comImage from "../image/e-sheba.png";
import styles from "../styles/About.module.scss";
import Footer from "../components/Footer";

const About = ({ service = 99 }) => {
  return (
    <div className={`${styles.about}`}>
      <Link href="/">
        <a>go home</a>
      </Link>
      <h1 className={styles.highlightscss}>About</h1>
      <div >about page</div>
      <Image src={comImage} />
      <Link replace href={`/services/${service}`}>
        <a>services</a>
      </Link>
    </div>
  );
};

export default About;

About.getLayout= function PageLayout(page){
  return(
    <>
    {page}
    <Footer/>
    </>
  )
}
