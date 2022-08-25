import Link from "next/link";
import React from "react";
import Image from 'next/image'
import comImage from "../image/e-sheba.png"

const About = ({service=99}) => {
    
  return (
    <div>
      <Link href="/">
        <a>go home</a>
      </Link>
      <h1>about page</h1>
     <Image src={comImage}/>
     <Link replace href={`/services/${service}`}><a>services</a></Link>
    </div>
  );
};

export default About;
