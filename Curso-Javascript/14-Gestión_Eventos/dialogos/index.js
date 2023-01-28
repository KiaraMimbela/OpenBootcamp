const boton = document.querySelector("#btn")
boton.addEventListener("click", () => {
    // alert("¿Estás seguro?") // alerta en pantalla
    // confirm("¿Estás seguro?") && console.log("OK") // solo si es positivo
    confirm("¿Estás seguro?") ? console.log("OK") : console.log("NO!") // manera más óptima, operador ternario
    /* manera más larga
    const respuesta = confirm("¿Estás seguro?")
    if(respuesta) {
        console.log("Estas de acuerdo")
    } else {
        console.log("No estás de acuerdo")
    }*/
})

const btnInfo = document.querySelector("#info")
btnInfo.addEventListener("click", () => {
    // prompt => pedir información al usuario como alert
    const nombre = prompt("¿Cuál es tu nombre?")
    if (nombre) {
        console.log("Tu nombre es " + nombre)
    } else {
        console.log("No has introducido nada")
    }
})

const lista = [{
    nombre: "Laura",
    edad: 40
}, {
    nombre: "Matthew",
    edad: 4
}, {
    nombre: "Victor",
    edad: 17
},{
    nombre: "Christian",
    edad: 22
}, {
    nombre: "Kiara",
    edad: 21
}]
console.table(lista) // muestra la lista en formato tabla en consola