



export const loaderProductsByCat = async ({params}) => {
  const res = await fetch(`http://localhost:8080/api/productos/${params.cat}`);
  const products = await res.json();
  return {products};
}