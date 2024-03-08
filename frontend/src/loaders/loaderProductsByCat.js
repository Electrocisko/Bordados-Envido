
const url = "https://bordados-server-production.up.railway.app/api/productos/"



export const loaderProductsByCat = async ({params}) => {
  const res = await fetch(url + params.cat);
  const products = await res.json();
  return {products};
}