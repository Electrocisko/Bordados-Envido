import styles from "../scss/pages/products.module.scss";
import Card from "../components/card/Card";
import {useLoaderData} from "react-router-dom";

function Products() {

  const {products} = useLoaderData();
  const {data} = products
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Productos</h1>
      <div className={styles.productosContainer}>

        {data.map((item) => (
          <Card key={item._id} modelo={item.modelo} precio={item.precio} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default Products;

