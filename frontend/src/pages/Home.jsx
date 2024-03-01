import Logo from "../components/icons/Logo";
import WhatsappGlobe from "../components/icons/WhatsappGlobe";
import useTitle from "../hooks/useTitle";
import styles from "../scss/pages/home.module.scss";

function Home() {

  useTitle({title: "Home"})
  return (
    <main className={styles.mainContainer}>
      <div className={styles.imagesContainer}>
        <img
          className={styles.image}
          src="./images/hilo-b.jpg"
          alt="Hilos de bordar"
        />
        <p className={styles.credit}>Foto de cottonbro studio</p>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <picture className={styles.logo}>
            <Logo height={"100px"} />
          </picture>
          <h1 className={styles.title}>Bordados Envido</h1>
        </div>

        <div className={styles.paragraphsContainer}>
          <p className={styles.text}>
            Proveemos bordados computarizados en todo tipo de prendas, para
            crear productos únicos.
          </p>
          <p className={styles.text}>
          Ofrecemos atención tanto a mayoristas como a minoristas.
          </p>
          <p className={styles.text}>
            Ya sea que quieras una prenda personalizada para ti, o para
            potenciar la imagen de tu equipo, negocio, empresa o marca,
            ¡nosotros podemos ayudarte!
          </p>
          <div className={styles.desktopText}>
            <p className={styles.text}>Elegí una gorra en la página Productos.</p>
            <p className={styles.text}>
            Adjúntanos el diseño, logo, foto, imagen por mail o WhatsApp que quieres aplicar a la gorra.
            </p>
            <p className={styles.text}>Comunícanos la cantidad que necesitas.</p>
          </div>
        </div>

        <a href="https://api.whatsapp.com/send?phone=05491126193414&text=Hola, Necesito mas informacion sobre Bordados Envido. Gracias!">
          <div className={styles.contact}>
            <h2>Contactanos</h2>
            <WhatsappGlobe height="40px" width="40px" />
          </div>
        </a>
      </div>
    
    </main>
  );
}

export default Home;
