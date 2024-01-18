import React from 'react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Student from '../Images/Student.jpg'
import Link from 'next/link';
import Slideshow from '@/Components/slider/slider';


export default function HeroSection(){
  return (
    <>
<div className={styles.HeroSection}>
    <div className={styles.right}>
        <h1  className={styles.rightTitle}>Are you ready to kickstart or improve your learning?</h1>
        <p className={styles.rightDes}>Join us today and we will get you started with any course of your choice, We have insightful videos and articles to aid your learning.</p>
    <p className={styles.rightDes2}>What are you waiting for???</p>
    <button className={styles.btn}><Link href="/portal" className={styles.rightLink}>Join us</Link></button>
    </div>
    <div className={styles.left}>
      <Slideshow/>
        {/* <Image src={Student} className={styles.leftImg} alt='student'></Image> */}
    </div>
</div>
    </>
  )
}
