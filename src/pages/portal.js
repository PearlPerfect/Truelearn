import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/Components/navbar/navbar';
import Footer from '@/Components/Footer/footer';
import Sign from '@/Components/SignUp/authentication';

export default function Portal() {
  return (
    <>
          <Head><title>Student Portal</title></Head>
   
<Navbar/>
<div><Sign/></div>
<Footer/>
    </>
  )
}
