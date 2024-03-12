import {urlBase} from "../apiserver/apiserver.js"

const url = urlBase;

export const loaderProductsByCat = async ({params}) => {
  const res = await fetch(url +"/"+ params.cat);
  const products = await res.json();
  return {products};
}