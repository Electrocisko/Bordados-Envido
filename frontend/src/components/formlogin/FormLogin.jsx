import styles from "./formcontainer.module.scss"

function FormLogin() {
  return (
 
    <form className={styles.form_container}>
    <input type="text" name="username"  placeholder="Username"/>
    <input type="password" name="password"  placeholder="Password"/>
    <button type="submit">Enviar</button>
   </form>

  )
}

export default FormLogin