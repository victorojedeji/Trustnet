import styles from '../Components/NavBar.module.css'
import {Link} from 'react-router-dom'
import Logo from '../Assets/Logo/Logo.png'


const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link>
        <div className={styles.logo_wrapper}>
          <img src={Logo} className={styles.logo_img} alt='logo' /><span className={styles.company_name}>TrustNet</span>
        </div>

        <div>
          <Link to='/'>Home</Link>
          <Link to='about'>About</Link>
          <Link to='categories'>Categories</Link>
          <Link to='pricing'>Pricing</Link>
          <Link to='contact'>Contact</Link>
          <Link to='login'>Login</Link>
          <Link to='signup'>Signup</Link>
        </div>
      </Link>
    </div>
  )
}

export default NavBar
