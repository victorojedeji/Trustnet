import React from 'react'
import styles from '../Components/Footer.module.css'
import {Link} from 'react-router-dom'
import Logo from '../Assets/Logo/Logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.logo_container}>
        <Link to='/' className={styles.logo_wrapper}>
          <img src={Logo} className={styles.logo_img} alt='logo' />
          <h1 className={styles.company_name}>TrustNet</h1>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
