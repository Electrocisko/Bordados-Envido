const loginForm = document.querySelector(".login");
const URL = "http://localhost:8080/api/login";

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let data = new FormData(loginForm);
    let obj = {};
    data.forEach((value, key) => (obj[key] = value));
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((json) =>{
        console.log(json)
      } 
      )
      .catch((error) => {
        console.log(`Error en peticion login.js fetch: ${error}`);
      });
    loginForm.reset();
  });