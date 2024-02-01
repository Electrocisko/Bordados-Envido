import styles from '../scss/pages/home.module.scss';

function Home() {
  return (
 <main>
  <img className={styles.image} src="./src/assets/images/mano-sujetando-gorra-beisbol-blanca-logo-montanas-estampado.jpg" alt="Hombre mostrando una gorra" />
  {/* <img className={styles.image} src="./src/assets/images/material-costura-manos-primer-plano.jpg" alt="Señora bordando con maquina" /> */}
  <h1 className={styles.title}>Bordados Computarizados</h1>
  <p className={styles.text}>Proveemos bordados computarizados en todo tipo de prendas, para crear productos únicos.</p>
  <p className={styles.text}>Ya sea que quieras una prenda personalizada para ti, o para potenciar la imagen de tu equipo, negocio, empresa o marca, ¡nosotros podemos ayudarte!</p>
 </main>
  )
}

export default Home

