import React from 'react'
import styles from '../Components/Footer.module.css'
import {Link} from 'react-router-dom'
import Logo from '../Assets/Logo/Logo.png'
import { 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoLogoLinkedin, 
  IoLogoTwitter, 
  IoLogoYoutube 
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.logo_container}>
        <Link to='/' className={styles.logo_wrapper}>
          <img src={Logo} className={styles.logo_img} alt='logo' />
          <h1 className={styles.company_name}>TrustNet</h1>
        </Link>
      </div>

      <div className={styles.footer_nav}>
        <div className={styles.first_nav_section}>
          <ul className={styles.ul}>
            <li className={styles.info_text}>
              About
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>About Us</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Jobs</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Contact</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Blog</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>How TrustNet works</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Transparency Report</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Press</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Investor Relations</Link>
            </li>
          </ul>
        </div>
          
        <div className={styles.second_nav_section}>
          <ul className={styles.ul}>
            <li className={styles.info_text}>
              Community
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>TrustNet reviews</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Help center</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Log in</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Sign Up</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link to='#' className={styles.footer_link}>Chrome App</Link>
            </li>
          </ul>
        </div>

        <div className={styles.third_nav_section}>
          <ul className={styles.ul}>
            <li className={styles.info_text}>
              Businesses
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>TrustNet Business</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Products</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Plans & Pricing</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Business Logic</Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link className={styles.footer_link}>Blog for Business</Link>
            </li>
          </ul>
        </div>

        <div className={styles.forth_nav_section}>
          <ul className={styles.ul}>
            <li className={styles.info_text}>
              Follow us on
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link to='#' className={styles.footer_link}><IoLogoInstagram className={styles.footer_icon}/></Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link to='#' className={styles.footer_link}><IoLogoFacebook className={styles.footer_icon}/></Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link to='#' className={styles.footer_link}><IoLogoTwitter className={styles.footer_icon}/></Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link to='#' className={styles.footer_link}><IoLogoLinkedin className={styles.footer_icon}/></Link>
            </li>
            <li className={styles.footer_link_wrapper}>
              <Link to='#' className={styles.footer_link}><IoLogoYoutube className={styles.footer_icon}/></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.fifth_nav_section}>
        <ul className={styles.ul}>
          <li className={styles.footer_link_wrapper}>
            <Link to='#' className={styles.footer_link}>Legal</Link>
          </li>
          <li className={styles.footer_link_wrapper}>
            <Link to='#' className={styles.footer_link}>Privacy Policy</Link>
          </li>
          <li className={styles.footer_link_wrapper}>
            <Link to='#' className={styles.footer_link}>Terms and Condition</Link>
          </li>
          <li className={styles.footer_link_wrapper}>
            <Link to='#' className={styles.footer_link}>Guidlines for Reviewers</Link>
          </li>
          <li className={styles.footer_link_wrapper}>
            <Link to='#' className={styles.footer_link}>System status</Link>
          </li>
        </ul>
      </div>

      <h1 className={styles.info_text}>2023 TrustNet, Inc. All rights reserved.</h1>
    </footer>
  )
}

export default Footer
