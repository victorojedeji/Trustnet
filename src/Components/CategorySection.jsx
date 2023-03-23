import React, {useState} from 'react'
import categories from '../Data'
import styles from './CategorySection.module.css'
import { 
  IoArrowBack,
  IoArrowForward,
} from "react-icons/io5";




function CategorySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.table(currentSlide)

  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? categories.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === categories.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className={styles.category_section}>
    <div className={styles.category_section_header}>
      <h1 className={styles.category_head}>Explore categories</h1>
      <button className={styles.category_btn}>view all</button>
    </div>

    <div className={styles.review_container}>
      <div className={styles.button_holder}>
        <button className={styles.arrow} onClick={handlePreviousSlide} style={{ display : currentSlide < 1 ? "none" : "block" }}>
          <IoArrowBack className={styles.arrow_forward}/>
        </button>
      </div>
      <div className={styles.review_board}>
        {categories[currentSlide].cards.map((card) => (
          <div key={card.id} className={styles.review_card}>
            <p>{card.category}</p>
          </div>
        ))}
      </div>
      <div className={styles.button_holder}>
        <button className={styles.arrow} onClick={handleNextSlide} style={{ display: currentSlide === 0 ? "block" : "none"  }}>
          <IoArrowForward className={styles.arrow_back}/>
        </button>
      </div>
    </div>
  </div>
  );
}

export default CategorySection