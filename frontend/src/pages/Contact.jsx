import EmailIcon from "../components/icons/EmailIcon";
import Instagram from "../components/icons/Instagram";
import PhoneIcon from "../components/icons/PhoneIcon";
import Whatsapp from "../components/icons/Whatsapp";
import styles from "../scss/pages/contact.module.scss";

function Contact() {
  return (
    <>  <h1 className={styles.title}>Contacto</h1>
    
    <div className={styles.container}>
    
    <div className={styles.linksContainer}>
  
    <a href="https://api.whatsapp.com/send?phone=05491122788440&text=Hola, Necesito mas informacion sobre Bordados Envido. Gracias!">
    <div className={styles.whatsapp}>
        <Whatsapp />
        <p>Whatsapp</p>
        </div>
      </a>
    
      <a href="https://www.instagram.com/bordados.envido/">
        <div className={styles.instagram}>
          <Instagram />
          <p>@bordados.envido</p>
        </div>
      </a>

      <a className={styles.mail} href="mailto:bordadosenvido@gmail.com">
        <EmailIcon height="38px" width="38px" />
        bordadosenvido@gmail.com
      </a>

      <a className={styles.mail} href="tel:+5491122788440">
        <PhoneIcon height="38px" width="38px" />
        11 2278-8440
      </a>
    </div>
    <div className={styles.textContainer}>
    <ol>
      <li className={styles.liText}>Elegí una gorra en la página Productos</li>
      <li className={styles.liText}>
        Adjuntanos el diseño, logo, foto, imagen por mail o WhatsApp que
        queres aplicar a la gorra
      </li>
      <li className={styles.liText}>Comunícanos la cantidad que necesitas.</li>
    </ol>
    </div>

  </div>
    </>

  );
}

export default Contact;
