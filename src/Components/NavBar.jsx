import {React, useState, useEffect} from 'react'
import styles from '../Components/NavBar.module.css'
import { IoSearchSharp } from "react-icons/io5";
import {Link, ScrollRestoration, Outlet} from 'react-router-dom'
import Logo from '../Assets/Logo/Logo.png'


const NavBar = () => {
  const [drawer, setDrawer] = useState(false);

  const showDrawer = () => {
    setDrawer(!drawer)
  }

  useEffect(() => {
    drawer
    ? document.querySelector("body").classList.add("active")
    : document.querySelector("body").classList.remove("active");
  }, [drawer])

  
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
        
        <div className={drawer ? 'link_wrapper active' : 'link_wrapper'}>
          <Link to='/' className={styles.nav_link}>Home</Link>
          <Link to='about' className={styles.nav_link}>About</Link>
          <Link to='categories' className={styles.nav_link}>Categories</Link>
          <Link to='pricing' className={styles.nav_link}>Pricing</Link>
          <Link to='contact' className={styles.nav_link}>Contact</Link>
          <Link to='login' className={styles.nav_link}>Login</Link>
          <Link to='signup' className={styles.nav_link}>Signup</Link>
        </div>

        <div className='search_icon_wrapper'>
          <button className='nav_search_button' aria-controls='navigation-drawer' aria-expanded='false'>
            <IoSearchSharp className='IoSearchSharp' />
          </button>
        </div> 

        <div className='reset preload'>
          <div className='nav_toggle_wrapper' onClick={showDrawer}>
            <button className='nav_toggle' aria-controls='navigation-drawer' aria-expanded='false'>
            <svg stroke="#fff" className="button-two" viewBox="0 0 100 100" width="25">
              <line className="line top" x1="90" x2="10" y1="40" y2="40" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0">
              </line>
              <line className="line bottom" x1="10" x2="90" y1="60" y2="60" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0">
              </line>
            </svg>
            </button>
          </div>
        </div> 
      </nav>
      <Outlet />
    </div>
  )
}

export default NavBar
