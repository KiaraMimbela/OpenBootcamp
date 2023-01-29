// obteniendo los elementos por sus clases
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

// for each para que cada parrafo de la class parrafo tengan la misma acción
parrafos.forEach(parrafo => {
    // evento de arrastrar => dragstart
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)// innerText => el contenido del párrafo
        parrafo.classList.add("dragging")// añadiendo una class nueva
        event.dataTransfer.setData("id", parrafo.id)// guardar el dato del id del parrafo en variable id
        const elemento_fantasma = document.querySelector(".imagen-fantasma")// obteniendo el elemento por su class
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)// usar una imagen en vez de que se vea el mismo parrafo arrastrandose
    })

    // evento de cuando se deja de arrastrar o soltar => dragend
    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging") // removiendo la class
    })
})

// for each para referirse a cada seccion del grupo de secciones para que realicen la misma acción
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        // evento de arrastrar dentro de la seccion
        event.preventDefault()// para prevenir el comportamiento por defecto que complica la acción de drop
        event.dataTransfer.dropEffect = "copy" // copy por defecto
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop", event => {
        // evento de soltar
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id") // obteniendo el id del parrafo por transferencia de datos
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo) // agregando el parrafo arrastrado a la sección mediante su id
    })
})