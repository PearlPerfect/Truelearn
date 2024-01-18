import React from 'react'
import {HiOutlineCurrencyBangladeshi} from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/Components/navbar/navbar';
import Footer from '@/Components/Footer/footer';
import aboutus from "../Images/About us.jpg"
import AboutSlideshow from '@/Components/aboutSlider/about.slider';



export default function About() {
  return (
    <>
    <Head><title>TrueLearn|| About us</title></Head>
<Navbar/>
    <div className="eachPost">
      <div className="eachPostWrapper">
        <Image
          className="aboutUsImg"
          src={aboutus} alt=''
        />
        <h1 className="aboutUsTitle">TrueLearn</h1>
    
    <h2 className="aboutUs">
        About Us
    </h2>
        <p className="eachPostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
      <h3 className="postSubTitle">We also post about:</h3>
     
     <AboutSlideshow/>
    </div>
    <Footer/>
    </>
  )
}
