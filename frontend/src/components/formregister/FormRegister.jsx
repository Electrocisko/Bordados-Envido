import { useState } from "react";
import styles from "./formregister.module.scss";
import {urlRegister} from "../../apiserver/apiserver.js"

function FormRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    password: "",
    checkpassword: "",
    direccion: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(urlRegister, options)
      .then((response) => response.json())
      .then((data) => {
       if (data.status === "error") {
        alert(data.message)
       } else {
        alert("OK succes");
        setFormData({
          nombre: "",
          apellido: "",
          telefono: "",
          password: "",
          checkpassword: "",
          direccion: "",
          email: "",
        })
       }
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        required={true}
        placeholder="Ingrese nombre"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
      />
      <label htmlFor="apellido">Apellido</label>
      <input
        type="text"
        name="apellido"
        id="apellido"
        required={true}
        placeholder="Ingrese apellido"
        value={formData.apellido}
        onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
      />
      <label htmlFor="telefono">Telefono</label>
      <input
        type="tel"
        name="telefono"
        id="telefono"
        required={true}
        placeholder="Ingrese teléfono"
        value={formData.telefono}
        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        required={true}
        placeholder="Ingrese password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <label htmlFor="checkpassword">Confirme Password</label>
      <input
        type="password"
        name="checkpassword"
        required={true}
        placeholder="Reingrese password"
        value={formData.checkpassword}
        onChange={(e) =>
          setFormData({ ...formData, checkpassword: e.target.value })
        }
      />
      <label htmlFor="direccion">Dirección</label>
      <input
        type="text"
        name="direccion"
        id="direccion"
        required={true}
        placeholder="Ingrese dirección"
        value={formData.direccion}
        onChange={(e) =>
          setFormData({ ...formData, direccion: e.target.value })
        }
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required={true}
        placeholder="Ingrese Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button className={styles.submit} type="submit">
        Enviar
      </button>
    </form>
  );
}

export default FormRegister;
