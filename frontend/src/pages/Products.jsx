import styles from "../scss/pages/products.module.scss";
import Card from "../components/card/Card";
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { useState } from "react";

function Products() {
  useTitle({ title: "Productos" });

  const [sorting, setSorting] = useState();


  const { products } = useLoaderData();
  const { data } = products;

  const handleSorting = (sortBy) => {
   
    if (sortBy == "nombre") sortByModel(data);
    if (sortBy == "ultimospublicados") sortByOldest(data);
    if (sortBy == "primerospublicados") sortByNew(data);
    if (sortBy == "menorprecio") sortByMinusPrice(data);
    if (sortBy == "mayorprecio") sortByMayorPrice(data);
    setSorting(sortBy)
  
  };

  const sortByModel = (dataToSort) => {
    dataToSort.sort((a, b) => {
      if (a.modelo > b.modelo) {
        return 1;
      }
      if (a.modelo < b.modelo) {
        return -1;
      }
      return 0;
    });
  };

  const sortByOldest = (dataToSort) => {
    dataToSort.sort((a, b) => {
      if (a.iat > b.iat) {
        return 1;
      }
      if (a.iat < b.iat) {
        return -1;
      }
      return 0;
    });
  };

  const sortByNew = (dataToSort) => {
    dataToSort.sort((b, a) => {
      if (a.iat > b.iat) {
        return 1;
      }
      if (a.iat < b.iat) {
        return -1;
      }
      return 0;
    });
  };

  const sortByMinusPrice = (dataToSort) => {

    console.log("sortbyminus");

    dataToSort.sort((b, a) => {
      if (a.precio > b.precio) {
        return 1;
      }
      if (a.precio < b.precio) {
        return -1;
      }
      return 0;
    });
  };

  const sortByMayorPrice = (dataToSort) => {

    console.log("sortbymayor");

    dataToSort.sort((a, b) => {
      if (a.precio > b.precio) {
        return 1;
      }
      if (a.precio < b.precio) {
        return -1;
      }
      return 0;
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{products.category}</h1>
      <p className={styles.p}>
        Por precio al mayorista, consultar por el canal de contacto.
      </p>
      <div>
        <label htmlFor="sort">Ordenar por: </label>

        <select
          className={styles.option}
          name="sort"
          id="sort"
          onChange={(e) => handleSorting(e.target.value)}
        >
          <option value="primerospublicados">Primeros Publicados</option>
          <option value="ultimospublicados">Ultimos Publicados</option>
          <option value="menorprecio">Menor precio</option>
          <option value="mayorprecio">Mayor precio</option>
          <option value="nombre">Nombre</option>
        </select>
      </div>

      <div className={styles.productosContainer}>
        {data.map((item) => (
          <Card
            key={item._id}
            modelo={item.modelo}
            precio={item.precio}
            image={item.image}
            nostock={item.nostock}
            iat={item.iat}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
