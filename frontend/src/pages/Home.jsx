import Logo from "../components/icons/Logo";
import WhatsappGlobe from "../components/icons/WhatsappGlobe";
import styles from "../scss/pages/home.module.scss";

function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.imagesContainer}>
        <img
          className={styles.image}
          src="./images/mano-sujetando-gorra-beisbol-blanca-logo-montanas-estampado.jpg"
          alt="Hombre mostrando una gorra"
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <picture className={styles.logo}>
            <Logo height={"100px"} />
          </picture>
          <h1 className={styles.title}>Bordados Computarizados</h1>
        </div>

        <div className={styles.paragraphsContainer}>
          <p className={styles.text}>
            Proveemos bordados computarizados en todo tipo de prendas, para
            crear productos únicos.
          </p>
          <p className={styles.text}>
            Ya sea que quieras una prenda personalizada para ti, o para
            potenciar la imagen de tu equipo, negocio, empresa o marca,
            ¡nosotros podemos ayudarte!
          </p>
          <div className={styles.desktopText}>
            <p className={styles.text}>Elegí una gorra en la página Productos</p>
            <p className={styles.text}>
              Adjuntanos el diseño, logo, foto, imagen por mail o WhatsApp que
              queres aplicar a la gorra
            </p>
            <p className={styles.text}>Comunícanos la cantidad que necesitas.</p>
          </div>
        </div>

        <a href="https://api.whatsapp.com/send?phone=05491150436661&text=Hola, Nececito mas informacion!">
          <div className={styles.contact}>
            <h2>Contactanos!! </h2>
            <WhatsappGlobe height="40px" width="40px" />
          </div>
        </a>
      </div>
    </main>
  );
}

export default Home;
