



export const loaderProductsByCat = async ({params}) => {
  const res = await fetch(`https://bordados-bacend-production.up.railway.app/api/productos/${params.cat}`);
  const products = await res.json();
  return {products};
}