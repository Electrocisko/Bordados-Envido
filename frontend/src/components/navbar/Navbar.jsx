import { useState } from "react";
import Closed from "../icons/Closed";
import Hamburguer from "../icons/Hamburguer";
import Logo from "../icons/Logo";
import styles from "./navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import Expand from "../icons/Expand";
import Retract from "../icons/Retract";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

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
            <NavLink to="/"  onClick={() => setShowSubMenu(false)}>Inicio</NavLink>
          </li>
          <li className={styles.dropdwon}>
            <NavLink className={styles.products} to="/productos" onClick={() => setShowSubMenu(!showSubMenu)}>Productos {!showSubMenu?  <Expand height="24" width="24" fill="white"/> : <Retract height="24" width="24" fill="white" />}    </NavLink>
            <ul
              className={
                showSubMenu
                  ? `${styles.subMenu}`
                  : `${styles.subMenu} ${styles.subMenuHide}`
              }
            >
              <li>
                <Link to="/productos/gorros">Gorros</Link>
              </li>
              <li>
                <Link to="/productos/parches">Parches</Link>
              </li>
              <li>
                <Link to="/productos/collares">Collares</Link>
              </li>
              <li>
                <Link to="/productos/otros">Otros</Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            <NavLink to="/nosotros" onClick={() => setShowSubMenu(false)}>Nosotros</NavLink>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            <NavLink to="/contacto" onClick={() => setShowSubMenu(false)}>Contacto</NavLink>
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
