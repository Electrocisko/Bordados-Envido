import styles from "./formcontact.module.scss"

function FormContact() {
  return (
   <>
   <form  className={styles.formcontainer} action="https://formspree.io/f/xzbngyvk" method="post">
    <label className={styles.label} htmlFor="name">Nombre</label>
    <input type="text" placeholder="Ingreso su nombre" id="name" name="name" className={styles.input} required={true}/>
    <label htmlFor="email" className={styles.label}>Correo electronico</label>
   <input type="email" name="email" id="email" placeholder="Ingrese su correo electronico" className={styles.input} required={true}/>
   <label htmlFor="consulta" className={styles.label}>Consulta</label>
   <textarea name="textarea" id="consulta" cols="15" rows="5" placeholder="Escriba su consulta aqui ..." className={styles.input} required={true}></textarea>
   <button type="submit"  className={styles.button}>Enviar</button>
   </form>
   </>
  )
}

export default FormContact

