
export const dtoUser = (dataUser) => {

    const user = {
        nombre: dataUser.nombre,
        apellido: dataUser.apellido,
        email: dataUser.email
    }
    return user;
}

