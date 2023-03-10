import styles from '../Components/HeroHeader.module.css'
import heroHeadeImg from '../Assets/Background/heroheader2.jpg'


const HeroHeader = () => {
  return (
    <section className={styles.hero_container}>
      <img src={heroHeadeImg} alt='hero-header' className={styles.hero_img} />
    </section>
  )
}

export default HeroHeader
