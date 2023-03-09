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
      </Link>
    </div>
  )
}

export default NavBar
