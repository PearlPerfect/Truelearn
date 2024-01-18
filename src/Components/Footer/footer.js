import React from "react";
import styles from '../Styles/footer.module.css';
import Link from "next/link";
import {HiOutlineCurrencyBangladeshi, HiMail, HiPhone, HiPencil} from 'react-icons/hi';
import {FaLinkedinIn, FaWhatsapp, FaXTwitter, FaGithub, FaFacebookF} from 'react-icons/fa6'

export default function Footer() {
  return (
    <>  <footer>  
    <div className={styles.Footer}>
   <div className={styles.LogoDiv}>
             <Link href={"/"} className={styles.footerLogo}><HiOutlineCurrencyBangladeshi /> TrueLearn
      </Link>

      <p className={styles.LogoDivDes}>We give you a seamless platform to learn and improve for the betterment of yourself and your growth</p>
      
      <div className={styles.socials}>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaXTwitter/></a>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaLinkedinIn/></a>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaGithub/></a>
        <a target="_blank" rel="noreferrer noopener" href='#' className={styles.socialIcons}><FaWhatsapp/></a>
        <a target="_blank" rel="noreferrer noopener" href="#" className={styles.socialIcons}><FaFacebookF/></a>
      </div>
      </div>
    
      <div className={styles.footerHeading}>
        <div className={styles.footerTitles}>
            <h3>Learn More</h3>
            </div>
        <ul>
            <li className={styles.FooterLi}><Link href={"/about"}>Terms</Link></li>
            <li className={styles.FooterLi}><Link href={"/about"}>Privacy</Link></li>
            <li className={styles.FooterLi}><Link href={"/about"}>About Us</Link></li>
            <li className={styles.FooterLi}><Link href={"/courses"}>courses</Link></li>
            <li className={styles.FooterLi}><Link href={"/teach"}>Teach on TrueLearn</Link></li>
        </ul>

      </div>

      <div className={styles.footerHeading}>
        <div className={styles.footerTitles}>
            <h3>Company</h3>
        </div>
        <ul>
            <li className={styles.FooterLi}><Link href={"/faqs"}>FAQS</Link></li>
            <li className={styles.FooterLi}><Link href={"/Blog"}>Blogs</Link></li>
            <li className={styles.FooterLi}><Link href={"/contact"}>Contact Us</Link></li>
            <li className={styles.FooterLi}><Link href={"/Testimonial"}>Testimonials</Link></li>
            <li className={styles.FooterLi}><Link href={"/getStarted"}>How it works</Link></li>
        </ul>
        </div>
    
      <div className={styles.footerHeading}>
        <div className={styles.footerTitles}>
            <h3>About</h3>
        </div>
        <ul>
            <li className={styles.FooterLi}><Link href={"mailto:perfectpearl2030@gmail.com"} className={styles.FooterLiIcon}><HiMail/>Email Us</Link></li>
            <li className={styles.FooterLi}><Link href={"/contact"} className={styles.FooterLiIcon}><HiPencil/>review</Link></li>
            <li className={styles.FooterLi}><Link href={"/"} className={styles.FooterLiIcon}><HiPhone/>+2349060539160</Link></li>
            <li className={styles.FooterLi}><Link href={"/about"} className={styles.FooterLiIcon}>About Us</Link></li>
            <li className={styles.FooterLi}><Link href={"/about"} className={styles.FooterLiIcon}>About Us</Link></li>
        </ul>

      </div>
      </div>
      <p className={styles.copyRight}>Copyright © PearlPerfect2023, All Rights Reserved.</p><br/>
      </footer>
      </>

  )
}

