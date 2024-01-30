import Closed from "../icons/Closed";
import Hamburguer from "../icons/Hamburguer";
import Logo from "../icons/Logo";
import styles from "./navbar.module.scss";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.icon_hamburguer}> <Hamburguer color="white" width="25" height="18" /></div>
     
      <div className={styles.logo_container}>
        <p>BORDADOS ENVIDO</p>
        <Logo height={"40px"} />
      </div>
      <p></p>
      <div className={styles.links_container}>
      <ul >
        <li><Closed  color="white" width="26" height="26" /></li>

        <li><Link to="/">Inicio</Link></li>
        <li> <Link to="/productos">Productos</Link></li>
        <li> <Link to="/nosotros">Nosotros</Link></li>
        <li> <Link to="/contacto">Contacto</Link></li>
      </ul>
      </div>

    </nav>
  );
}

export default Navbar;
