import styles from './card.module.scss'

function Card() {
  return (
    <div className={styles.cardContainer}>
        <img src="https://capshop.com.ar/wp-content/uploads/2024/01/20240121_192033-300x300.jpg" alt="Imagen de Gorro" />
        <h2 className={styles.name}>Gorra Dadcap</h2>
        <p className={styles.price}>$8.000,00</p>
    </div>







 
  )
}

export default Card