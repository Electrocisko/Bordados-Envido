/* eslint-disable react/prop-types */
import styles from "./card.module.scss";
import dayjs from "dayjs";


//const url = "https://bordados-bacend-production.up.railway.app/images/"

const url = "http://localhost:8080/images/";

function Card(props) {  

  let lastUpdated = dayjs(props.iat);
  let today = dayjs().subtract(1,'month');
  let newPublicac;

  if (today < lastUpdated) {
    newPublicac = true;
  } else {
    newPublicac = false;
  }


  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={url + props.image}
          alt="Imagen de Gorro"
        />
        {props.nostock && (
          <p className={styles.textoImagen}>Consulte Stock</p>
        )}
        {newPublicac  &&   <div id={styles.triangleTopleft}>
    <div className={styles.textBlock}>
      Nuevo!
    </div>
  </div>}
      </div>
      <h2 className={styles.name}>{props.modelo}</h2>
      <p className={styles.price}>${props.precio}</p>
    </div>
  );
}

export default Card;
