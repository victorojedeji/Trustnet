import styles from '../Components/NavBar.module.css'
import {Link} from 'react-router-dom'
import Logo from '../Assets/Logo/Logo.png'


const NavBar = () => {
  return (
    <div className={styles.container}>

        <div className={styles.logo_container}>
          <Link className={styles.logo_wrapper}>
            <img src={Logo} className={styles.logo_img} alt='logo' />
            <h1 className={styles.company_name}>TrustNet</h1>
          </Link>
        </div>
      

      <div>
        <Link to='/' className={styles.nav_link}>Home</Link>
        <Link to='about' className={styles.nav_link}>About</Link>
        <Link to='categories' className={styles.nav_link}>Categories</Link>
        <Link to='pricing' className={styles.nav_link}>Pricing</Link>
        <Link to='contact' className={styles.nav_link}>Contact</Link>
        <Link to='login' className={styles.nav_link}>Login</Link>
        <Link to='signup' className={styles.nav_link}>Signup</Link>
      </div>   
    </div>
  )
}

export default NavBar
