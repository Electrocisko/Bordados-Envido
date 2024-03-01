import styles from "../scss/pages/products.module.scss";
import Card from "../components/card/Card";
import {useLoaderData} from "react-router-dom";
import useTitle from "../hooks/useTitle";

function Products() {

  useTitle({title: "Productos"})

  const {products} = useLoaderData();
  const {data} = products
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Productos</h1>
      <p className={styles.p} >Por precio al mayorista, consultar por el canal de contacto.</p>
      <div className={styles.productosContainer}>

        {data.map((item) => (
          <Card key={item._id} modelo={item.modelo} precio={item.precio} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default Products;

