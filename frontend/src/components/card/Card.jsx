/* eslint-disable react/prop-types */
import styles from './card.module.scss'

//const url = "https://bordados-bacend-production.up.railway.app/images/"

const url = "http://localhost:8080/images/"


function Card(props) {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
           <img className={styles.image} src={url+props.image} alt="Imagen de Gorro" />

{ props.nostock && <p className={styles.textoImagen}>Consulte disponibilidad</p>}
          </div>
        <h2 className={styles.name}>{props.modelo}</h2>
        <p className={styles.price}>${props.precio}</p>
    </div>
  )
}

export default Card