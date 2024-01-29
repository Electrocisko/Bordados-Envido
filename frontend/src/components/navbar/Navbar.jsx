import Hamburguer from "../icons/Hamburguer";
import Logo from "../icons/Logo";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <Hamburguer color="white" />
      <div className={styles.logo_container}>
        <p>BORDADOS ENVIDO</p>
        <Logo height={"40px"} />
      </div>
      <p>Cart</p>
    </nav>
  );
}

export default Navbar;
