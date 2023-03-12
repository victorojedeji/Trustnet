import {React, useState} from 'react'
import styles from '../Components/NavBar.module.css'
import {Link, ScrollRestoration, Outlet} from 'react-router-dom'
import Logo from '../Assets/Logo/Logo.png'


const NavBar = () => {
  const [drawer, setDrawer] = useState(false);

  const showDrawer = () => {
    setDrawer(!drawer)
  }


  return (
    <div className={styles.NavBar_container}>
      <ScrollRestoration />
      <nav className={styles.nav_container}>
        <div className={styles.logo_container}>
          <Link to='/' className={styles.logo_wrapper}>
            <img src={Logo} className={styles.logo_img} alt='logo' />
            <h1 className={styles.company_name}>TrustNet</h1>
          </Link>
        </div>
        <div className={`${styles.link_wrapper} ${styles.active}`}>
          <Link to='/' className={styles.nav_link}>Home</Link>
          <Link to='about' className={styles.nav_link}>About</Link>
          <Link to='categories' className={styles.nav_link}>Categories</Link>
          <Link to='pricing' className={styles.nav_link}>Pricing</Link>
          <Link to='contact' className={styles.nav_link}>Contact</Link>
          <Link to='login' className={styles.nav_link}>Login</Link>
          <Link to='signup' className={styles.nav_link}>Signup</Link>
        </div> 

        <div className={styles.nav_toggle_wrapper}>
          <button className={styles.nav_toggle} aria-controls='navigation-drawer' aria-expanded='false'>
            <svg className={styles.hamburger} stroke='#000000' viewBox='0 0 100 100' width={20}>
              <path></path>
            </svg>
          </button>
        </div> 
      </nav>
      <Outlet />
    </div>
  )
}

export default NavBar
