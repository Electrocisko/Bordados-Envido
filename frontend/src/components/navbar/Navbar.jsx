import { useState } from "react";
import Closed from "../icons/Closed";
import Hamburguer from "../icons/Hamburguer";
import Logo from "../icons/Logo";
//import "./navbar.css";
import styles from "./navbar.module.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className={styles.navbar_container}>
      <Link to="/">
        <div className={styles.logo_container}>
          <p>BORDADOS ENVIDO</p>
          <Logo height={"40px"} />
        </div>
      </Link>

      <div
        className={
          showLinks
            ? `${styles.links_container}`
            : `${styles.links_container} ${styles.display_hide}`
        }
      >
        <ul className={styles.ul_list}>
          <li
            onClick={() => setShowLinks(!showLinks)}
            className={styles.close_icon}
          >
            <Closed color="white" width="26" height="26" />
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </div>

      <div
        className={styles.icon_hamburguer}
        onClick={() => setShowLinks(!showLinks)}
      >
        <Hamburguer color="white" width="25" height="18" />
      </div>
    </nav>
  );
}

export default Navbar;
