import styles from "../scss/pages/products.module.scss"
import Card from "../components/card/Card"


function Products() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Productos</h1>
      <div className={styles.productosContainer}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Products