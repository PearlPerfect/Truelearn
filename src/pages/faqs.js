import React from 'react'
import BasicAccordion from '@/Components/Accordion/FAQ'
import Navbar from '@/Components/navbar/navbar'
import Head from 'next/head'
import Footer from '@/Components/Footer/footer'
export default function Faqs() {
  return (
    <>
    <Head>
        <title>TrueLearn|| FAQ</title>
    </Head>
    <Navbar/>
    <BasicAccordion/>
    <Footer/>
    </>
  )
}
