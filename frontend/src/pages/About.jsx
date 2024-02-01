import styles from  "../scss/pages/about.module.scss";

function About() {
  return (
    <div>
    <h1 className={styles.title}>Nosotros</h1>
    <div className={styles.text}>
      <p>Somos dos jóvenes emprendedores que comenzamos con mucho entusiasmo un taller de bordados computarizados.</p>
      <p>Nos destacamos por nuestro diseño personalizados y originalidad.</p>
      <p>Nos enfocamos en pequeños y medianos clientes, ofreciendo servicios personalizados y contando con maquinaria de última tecnología.</p>
      <p>Nuestro objetivo primordial es que nuestros clientes queden satisfechos y a gusto con lo que vienen a buscar.</p>
      <p>Agradecemos a quienes se han sumado a nuestro servicio y nos han dejado su voto de confianza.</p>
    </div>
    </div>
  )
}

export default About