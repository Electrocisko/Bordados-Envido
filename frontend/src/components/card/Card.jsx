import PropTypes from 'prop-types';
import styles from "./card.module.scss";
import dayjs from "dayjs";
import {urlImages} from "../../apiserver/apiserver.js"

//const url = "https://bordados-server-production.up.railway.app/images/"
const url = urlImages;

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

Card.propTypes = {
  iat: PropTypes.string,
  image: PropTypes.string,
  nostock: PropTypes.bool,
  modelo: PropTypes.string,
  precio: PropTypes.number
}


export default Card;
