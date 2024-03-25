import FormLogin from "../components/formlogin/FormLogin";
import FormRegister from "../components/formregister/FormRegister";
import styles from "../scss/pages/register.module.scss";

function Register() {
  return (
    <div className={styles.container}>
      <h1>Pagina de Registro</h1>
      <div className={styles.forms_container}>
      <FormLogin/>
      <FormRegister />
      </div>

    </div>
  );
}

export default Register;
