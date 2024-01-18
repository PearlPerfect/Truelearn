import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/navbar/navbar'
import HeroSection from './heroSection'
import Footer from '@/Components/Footer/footer'
import Tab from '../Components/Tab/tab'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <Head>
        <title>TrueLearn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>
    <Tab/>
    <HeroSection/>
    <Footer/>
    </>
  )
}
