// guardar el elemento por el id
const hTexto = document.getElementById("h-texto")

// añadiendo el evento al elemento (función, ele evento harà esto ...)
hTexto.addEventListener("cambioTexto", evento => {
    // asignandole los nuevos valores al elemento
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

// creando la función con los parametros requeridos
function cambioTexto(nuevoTexto , color) {
    // instanciando el nuevo evento (funcion, objeto con los details)
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            // reasignando los valores
            texto: nuevoTexto,
            color
        }
    })
    // lanzar el evento sobre el elemento
    hTexto.dispatchEvent(evento)
}