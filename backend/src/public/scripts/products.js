const btns = document.querySelectorAll(".delete");


const deleteProductById = (item) => {
    let url = `http://localhost:8080/api/eliminar/${item}`

    fetch(url, {method: "DELETE"})
    .then((response) => response.json())
    .then(location.reload())
    .catch(() => console.log('Error al eliminar')) 
};

btns.forEach((element) => {
    element.addEventListener("click", (e) => {
        Swal.fire({
          title: "Esta seguro?",
          text: "Esta operación no se puede revertir!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Borrado!", "El producto fue eliminado.", "success");
            deleteProductById(e.target.name);
          }
        });
      });
  });


