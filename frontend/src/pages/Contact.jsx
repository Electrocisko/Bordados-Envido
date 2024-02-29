import FormContact from "../components/formcontact/FormContact";
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
  
    <a href="https://api.whatsapp.com/send?phone=05491126193414&text=Hola, Necesito mas informacion sobre Bordados Envido. Gracias!">
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

      <a className={styles.mail} href="tel:+05491126193414">
        <PhoneIcon height="38px" width="38px" />
        11 2619-3414
      </a>
    </div>
    <div className={styles.textContainer}>
<FormContact/>
    </div>

  </div>
    </>

  );
}

export default Contact;
