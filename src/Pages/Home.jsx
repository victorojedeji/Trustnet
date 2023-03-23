import {
  HeroHeader,
  Footer,
  CategorySection
} from '../Components'

import styles from '../Pages/Home.module.css'

const Home = () => {
  return (
    <div className={styles.home_container}>
      <HeroHeader />
      <CategorySection />
      <Footer />
    </div>
  )
}

export default Home