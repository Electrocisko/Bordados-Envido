/* eslint-disable react/prop-types */
import styles from './card.module.scss'

const url = "http://localhost:8080/images/"

function Card(props) {
  return (
    <div className={styles.cardContainer}>
        <img src={url+props.image} alt="Imagen de Gorro" />
        <h2 className={styles.name}>{props.modelo}</h2>
        <p className={styles.price}>${props.precio}</p>
    </div>
  )
}

export default Card