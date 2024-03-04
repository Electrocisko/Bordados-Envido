//const url = "https://bordados-bacend-production.up.railway.app/api/productos/";

const url = "http://localhost:8080/api/productos/"



export const loaderProductsByCat = async ({params}) => {
  const res = await fetch(url + params.cat);
  const products = await res.json();
  return {products};
}