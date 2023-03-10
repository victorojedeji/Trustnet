import {
  HeroHeader,
  Footer,
} from '../Components'

import styles from '../Pages/Home.module.css'

const Home = () => {
  return (
    <div className={styles.home_container}>
      <HeroHeader />
      <Footer />
    </div>
  )
}

export default Home