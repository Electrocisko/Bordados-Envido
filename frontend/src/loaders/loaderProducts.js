const url = "http://localhost:8080/api/productos";

export const loaderProducts = async () => {
  const res = await fetch(url);
  const products = await res.json();
  return {products};
}