 import {urlBase} from "../apiserver/apiserver.js"

const url = urlBase;

export const loaderProducts = async () => {
  const res = await fetch(url);
  const products = await res.json();
  return {products};
}