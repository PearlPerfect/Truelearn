import React from 'react'
import {HiOutlineCurrencyBangladeshi, HiMail, HiPhone} from 'react-icons/hi';
import Link from 'next/link'
import Head from 'next/head';
import styles from '../Components/Styles/contact.module.css'
import Navbar from '@/Components/navbar/navbar'
import Footer from '@/Components/Footer/footer'
import {FaLinkedinIn, FaWhatsapp, FaXTwitter, FaGithub, FaFacebookF} from 'react-icons/fa6'

export default function Contact() {
  return (
    <>
      <Head><title>TrueLearn|| Contact us</title></Head>
  <Navbar/>
  <section className={styles.contact} > 
          <div className={styles.contact__header}>
            <h2 className={styles.contact__title}>Contact Us</h2>
        <em class={styles.contanct__description}>...Do you have any question or suggestions?</em>
          </div> 
            
        
            <form action="mailto:pearlblaze2025@gmail.com" id="form" method="post" name="messageFormAction">
              <div className={styles.contact__name}>
                <input type="text" name="Firstname" required placeholder="Your First Name" className={styles.name} />
              <input type="text" name="lastname" required placeholder="Your Last Name" className={styles.name}/>
              </div>
              <input type="email" name="email" required placeholder="Your Email Address"/>
              <input type="tel" name="phonenumber" required placeholder="Your Phone Number"/>
              <textarea name="message" id="" cols="30" rows="10" placeholder="Leave a Message"></textarea>
                <div className={styles.contact__btn}>
                  <button type="submit" className={styles.btn}><span></span> Send Message</button>
                </div>
            </form>
            <div className={styles.contact__otherContact}>
              <div className={styles.each__otherContact}>
                <a href="mailto:perfectpearl2030.com"><HiMail className={styles.Mailicon}/></a>
                <strong>Send a mail</strong>
              </div>
              <div className={styles.each__otherContact}>
             <HiPhone className={styles.Mailicon}/>
                <strong>+2349060539160</strong>
              </div>
            </div>
            <div className={styles.socials}>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaXTwitter/></a>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaLinkedinIn/></a>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaGithub/></a>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaWhatsapp/></a>
        <a target="_blank" rel="noreferrer noopener" href="#" className={styles.socialIcons}><FaFacebookF/></a>
      </div>
        </section>

    <Footer/>
    </>
  )
}
