import WhatsappGlobe from "../components/icons/WhatsappGlobe";
import styles from "../scss/pages/home.module.scss";

function Home() {
  return (
    <main>
      <img
        className={styles.image}
        src="./images/mano-sujetando-gorra-beisbol-blanca-logo-montanas-estampado.jpg"
        alt="Hombre mostrando una gorra"
      />
      <h1 className={styles.title}>Bordados Computarizados</h1>
      <p className={styles.text}>
        Proveemos bordados computarizados en todo tipo de prendas, para crear
        productos únicos.
      </p>
      <p className={styles.text}>
        Ya sea que quieras una prenda personalizada para ti, o para potenciar la
        imagen de tu equipo, negocio, empresa o marca, ¡nosotros podemos
        ayudarte!
      </p>
{/* 
      <div className={styles.contact}>
      <h2>Contactanos!! </h2>
      <a href="https://api.whatsapp.com/send?phone=05491150436661&text=Hola, Nececito mas informacion!">
        <WhatsappGlobe height="40px" width="40px" />
      </a>
      </div> */}

      

     
      <a href="https://api.whatsapp.com/send?phone=05491150436661&text=Hola, Nececito mas informacion!">
      <div className={styles.contact}>
      <h2>Contactanos!! </h2>
        <WhatsappGlobe height="40px" width="40px" />
        </div>
      </a>
  

    </main>
  );
}

export default Home;
