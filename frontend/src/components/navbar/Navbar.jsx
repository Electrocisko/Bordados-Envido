import { useState } from "react";
import Closed from "../icons/Closed";
import Hamburguer from "../icons/Hamburguer";
import Logo from "../icons/Logo";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar_container">
      <div className="icon_hamburguer" onClick={() => setShowLinks(!showLinks)}  >
        <Hamburguer color="white" width="25" height="18"  />
      </div>

      <div className="logo_container">
        <p>BORDADOS ENVIDO</p>
        <Logo height={"40px"} />
      </div>

          <div className={showLinks ? "links_container" : "links_container display_hide" }>
        <ul className="ul-list">
          <li onClick={() => setShowLinks(!showLinks)} className="close-icon">
            <Closed color="white" width="26" height="26" />
          </li>

          <li onClick={() => setShowLinks(!showLinks)} >
            <Link to="/">Inicio</Link>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            {" "}
            <Link to="/productos">Productos</Link>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            {" "}
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li onClick={() => setShowLinks(!showLinks)}>
            {" "}
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
