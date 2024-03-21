import { urlRegister } from "../../apiserver/apiserver.js";
import styles from "./formregister.module.scss";

function FormRegister() {
  return (
    <form className={styles.form} action={urlRegister} method="post">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" required={true} placeholder="Ingrese nombre"/>
      <label htmlFor="apellido">Apellido</label>
      <input type="text" name="apellido" id="apellido" required={true} placeholder="Ingrese apellido"/>
      <label htmlFor="telefono">Telefono</label>
      <input type="tel" name="telefono" id="telefono" required={true} placeholder="Ingrese teléfono"/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required={true} placeholder="Ingrese password"/>
      <label htmlFor="checkpassword">Confirme Password</label>
      <input type="password" name="checkpassword" required={true} placeholder="Reingrese password"/>
      <label htmlFor="direccion">Dirección</label>
      <input type="text" name="direccion" id="direccion" required={true} placeholder="Ingrese dirección"/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required={true} placeholder="Ingrese Email"/>
      <button className={styles.submit}  type="submit">Enviar</button>
    </form>
  )
}

export default FormRegister