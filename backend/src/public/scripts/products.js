const btns = document.querySelectorAll(".delete");

const deleteProductById = (item) => {
  let url = `http://localhost:8080/api/eliminar/${item}`;

  fetch(url, {
    method: "DELETE",
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJub21icmUiOiJBZG1pbiIsImlhdCI6MTcwODU1MzAxMywiZXhwIjoxNzA4NjM5NDEzfQ.crHbrNA2PO7eojNPe_vFW-TuLIBy5ckAZ3dLVgwdSm4",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "error") {
        Swal.fire(data.message);
      }
      if (data.status === "success") {
        Swal.fire("Borrado!", "El producto fue eliminado.", "success");
      }
    })

    .then(location.reload())
    .catch(() => {
      Swal.fire("SweetAlert2 is working!");
      console.log("Error al eliminar");
    });
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
        deleteProductById(e.target.name);
      }
    });
  });
});
