import EmailIcon from "../components/icons/EmailIcon";
import Instagram from "../components/icons/Instagram";
import PhoneIcon from "../components/icons/PhoneIcon";
import Whatsapp from "../components/icons/Whatsapp";
import styles from "../scss/pages/contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.linksContainer}>
        <a href="https://api.whatsapp.com/send?phone=05491150436661&text=Hola, Nececito mas informacion!">
          {" "}
          <Whatsapp />
        </a>

        <a href="https://www.instagram.com/bordados.envido/">
          {" "}
          <div className={styles.instagram}>
            <Instagram />
            <p>@bordados.envido</p>
          </div>
        </a>

        <a className={styles.mail} href="mailto:bordadosenvido@gmail.com">
          {" "}
          <EmailIcon height="38px" width="38px" />
          bordadosenvido@gmail.com
        </a>

        <a className={styles.mail} href="tel:+541150436661">
          <PhoneIcon height="38px" width="38px" />
          11 5043-6661
        </a>
      </div>
      <ol>
        <li>Elegí una gorra en la página Productos</li>
        <li>
          Adjuntanos el diseño, logo, foto, imagen por mail o WhatsApp que
          queres aplicar a la gorra
        </li>
        <li>Comunícanos la cantidad que necesitas.</li>
      </ol>
    </div>
  );
}

export default Contact;
