import Link from "next/link";
import React from "react";
import Image from "next/image";
import comImage from "../image/e-sheba.png";
import styles from "../styles/About.module.css";

const About = ({ service = 99 }) => {
  return (
    <div className={`${styles.about}`}>
      <Link href="/">
        <a>go home</a>
      </Link>
      <h1>About</h1>
      <div className={styles.highlight}>about page</div>
      <Image src={comImage} />
      <Link replace href={`/services/${service}`}>
        <a>services</a>
      </Link>
    </div>
  );
};

export default About;
