const url = "https://bordados-bacend-production.up.railway.app/api/productos";

export const loaderProducts = async () => {
  const res = await fetch(url);
  const products = await res.json();
  return {products};
}