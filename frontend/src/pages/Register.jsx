import FormRegister from "../components/formregister/FormRegister";
import styles from "../scss/pages/register.module.scss";

function Register() {
  return (
    <div className={styles.container}>
      <h1>Pagina de Registro</h1>
      <FormRegister />
    </div>
  );
}

export default Register;
