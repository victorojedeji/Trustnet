import styles from '../Components/HeroHeader.module.css'
import heroHeadeImg from '../Assets/Background/heroheader2.jpg'


const HeroHeader = () => {
  return (
    <main className={styles.hero_container}>
      <img src={heroHeadeImg} alt='hero-header' className={styles.hero_img} />

      <div className={styles.hero_content}>
        <h1 className={styles.hero_text}>Read reviews. Write reviews. <br/>Find companies you can <span className={styles.colored}>trust.</span></h1>  
        <div className={styles.form_wrapper}>
          <input placeholder='Company or category' className={styles.form_input}/>
          <button className={styles.form_btn}>search</button>
        </div>
      </div>
    </main>
  )
}

export default HeroHeader
