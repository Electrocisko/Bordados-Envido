
const form = document.getElementById("formulario");


const route = "http://localhost:8080/api/ingresar "

  form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);

  fetch(route, {
    method: "POST",
    body: data,
  });

// Falta un sweetAlert!!

  form.reset();



 
  });