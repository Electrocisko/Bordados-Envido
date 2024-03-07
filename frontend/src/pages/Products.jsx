import styles from "../scss/pages/products.module.scss";
import Card from "../components/card/Card";
import {useLoaderData} from "react-router-dom";
import useTitle from "../hooks/useTitle";

function Products() {

  useTitle({title: "Productos"})

  const {products} = useLoaderData();
  const {data} = products


const sortByModel = (dataToSort) => {
  dataToSort.sort((a,b)=> {
    if (a.modelo > b.modelo) {
      return 1;
    }
    if (a.modelo < b.modelo) {
      return -1;
    }
    return 0;
  });
}

const sortByOldest = (dataToSort) => {
  dataToSort.sort((a,b)=> {
    if (a.iat > b.iat) {
      return 1;
    }
    if (a.iat < b.iat) {
      return -1;
    }
    return 0;
  });
}


//console.log(sortByModel(data));

sortByOldest(data)








  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Productos</h1>
      <p className={styles.p} >Por precio al mayorista, consultar por el canal de contacto.</p>
      <div className={styles.productosContainer}>

        {data.map((item) => (
          <Card key={item._id} modelo={item.modelo} precio={item.precio} image={item.image} nostock={item.nostock} iat={item.iat}/>
        ))}
      </div>
    </div>
  )
}

export default Products;

