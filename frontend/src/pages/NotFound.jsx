import {useRouteError, Link} from "react-router-dom"
import styles from "../scss/pages/notfound.module.scss";


function NotFound() {

    const error = useRouteError();

    console.log(error);

  return (
<div className={styles.container}>
    <h1>Upps Ruta inexistente</h1>

    <Link className={styles.link} to="/"><button className={styles.button}> Volver a inicio</button></Link>
   

</div>

  )
}

export default NotFound