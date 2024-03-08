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

  const sortByPrice = (dataToSort) => {
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




  if (sorting == "nombre") sortByModel(data);
  if (sorting == "viejos") sortByOldest(data);
  if (sorting == "nuevos") sortByNew(data);
  if (sorting == "precio") sortByPrice(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{products.category}</h1>
      <p className={styles.p}>
        Por precio al mayorista, consultar por el canal de contacto.
      </p>
      <div>
      <label htmlFor="cars">Ordenar por: </label>

<select name="cars" id="cars">
  <option value="volvo">Nombre</option>
  <option value="saab">Ultimos Publicados</option>
  <option value="mercedes">Primeros Publicados</option>
  <option value="audi">Menor precio</option>
  <option value="audi">Mayor precio</option>
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
