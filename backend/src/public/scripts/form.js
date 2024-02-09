
const form = document.getElementById("formulario");



  
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  console.log(data.get("modelo"));
  console.log(data.get("file"));
  });