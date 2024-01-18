import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/Components/navbar/navbar';
import Footer from '@/Components/Footer/footer';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Teacher from '../Images/teacher.jpg'
import Network from '../Images/network.jpg'
import Inspire from '../Images/inspire.jpg'
import BasicTabs from '@/Components/getStarted';
export default function Teach() {
  return (
    <>
          <Head><title>Instructors</title></Head>
    
    <Navbar/>
      <div className={styles.container}>
      <div className={styles.right}>
        <h1>Come teach with us</h1>
        <p>Change Lifes by Becoming an Instructor, You will change your life too</p>
        <button className={styles.btn}><Link href="/portal" className={styles.rightLink}>Get Started</Link></button>
      </div>
      </div>
      <section id="instructors">
        <h1 className={styles.sectionTitle}>Why Start?</h1>
        <div className={styles.reasons}>
          <div className={styles.eachReason}>
            <Image src= {Teacher} alt='teacher' className={styles.eachReasonImg}/>
            <h2>Teach your way</h2>
            <p className={styles.containerDes}>Publish that course or article that you have always wanted to, in the way you want, and be in control of your own content.</p>
          </div>
          <div className={styles.eachReason}>
            <Image src= {Inspire} alt='teacher' className={styles.eachReasonImg}/>
            <h2>Inspire learners</h2>
            <p className={styles.containerDes}>Share what you know and help learners explore their interests, gain new knowledge, as they advance their careers.</p>
          </div>
          <div className={styles.eachReason}>
            <Image src= {Network} alt='teacher' className={styles.eachReasonImg}/>
            <h2>Build Network</h2>
            <p className={styles.containerDes}>Expand your professional network, build your expertise, and earn more followers on each enrollment</p>
          </div>
        </div>
      </section>
      
      <section id="GetStarted">
        <h1 className={styles.sectionTitle}>How To Start</h1>
        <BasicTabs/>
      </section>

      <section id="instructors">
        <h1 className={styles.sectionTitle}>Become an instructor today</h1>
        <p className={styles.sectionDes}>Join Us and help us become one of the world’s largest online learning platforms.</p>
        <button className={styles.btnT}><Link href="/portal" className={styles.TLink}>Get Started</Link></button>
      </section>
      
      <Footer/>
    </>
  )
}
