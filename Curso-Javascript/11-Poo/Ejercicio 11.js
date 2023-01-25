class Estudiante {
    nombre
    asignaturas = ["Javascript", "HTML","CSS"]

    constructor(nombre) {
        this.nombre = nombre
    }

    obtenDatos() {
        return { nombre: this.nombre, asignaturas: this.asignaturas}
    }
}

const nuevoEstudiante = new Estudiante("Kiara")
// console.log(nuevoEstudiante)
console.log(nuevoEstudiante.obtenDatos())