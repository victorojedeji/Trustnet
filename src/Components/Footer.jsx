import React from 'react'
import styles from '../Components/Footer.module.css'
import {Link} from 'react-router-dom'
import Logo from '../Assets/Logo/Logo.png'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.logo_container}>
        <Link to='/' className={styles.logo_wrapper}>
          <img src={Logo} className={styles.logo_img} alt='logo' />
          <h1 className={styles.company_name}>TrustNet</h1>
        </Link>
      </div>
      <div>
        <div>
          <ul>
            <li>
              About
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>How TrustNet works</Link>
            </li>
            <li>
              <Link>Transparency Report</Link>
            </li>
            <li>
              <Link>Press</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
          </ul>
        </div>
          
        <div>
          <li>
            Community
          </li>
          <li>
            <Link>TrustNet reviews</Link>
          </li>
          <li>
            <Link>Help center</Link>
          </li>
          <li>
            <Link>Log in</Link>
          </li>
          <li>
            <Link>Sign Up</Link>
          </li>
          <li>
            <Link to='#'>Chrome App</Link>
          </li>
        </div>

        <div>
          <li>
            Businesses
          </li>
          <li>
            <Link>TrustNet Business</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
          <li>
            <Link>Plans & Pricing</Link>
          </li>
          <li>
            <Link>Business Logic</Link>
          </li>
          <li>
            <Link>Blog for Business</Link>
          </li>
        </div>

        <div>
          <li>
            Follow us on
          </li>
          <li>
            <Link to='#'><IoLogoInstagram/></Link>
          </li>
          <li>
            <Link to='#'><IoLogoFacebook/></Link>
          </li>
          <li>
            <Link to='#'><IoLogoTwitter/></Link>
          </li>
          <li>
            <Link to='#'><IoLogoLinkedin/></Link>
          </li>
          <li>
            <Link to='#'><IoLogoYoutube/></Link>
          </li>
        </div>
      </div>

      <div>
        <li>
          <Link to='#'>Legal</Link>
        </li>
        <li>
          <Link to='#'>Privacy Policy</Link>
        </li>
        <li>
          <Link to='#'>Terms and Condition</Link>
        </li>
        <li>
          <Link to='#'>Guidlines for Reviewers</Link>
        </li>
        <li>
          <Link to='#'>System status</Link>
        </li>
      </div>

      <h1>2023 TrustNet, Inc. All rights reserved.</h1>
    </footer>
  )
}

export default Footer
