class Persona {
    _nombre
    _edad

    constructor(nombre, edad) {
        this._nombre = nombre 
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

// extends => herencia - inheritance
class Desarrollador extends Persona {

    constructor(nombre, edad, lenguaje) {
        super(nombre, edad) // referirse al constructor del padre
        this.lenguaje = lenguaje
    }

    saludo () { // override => sobrescribir
        // polimorfismo => varias formas
        super.saludo() // referirse a la función saludo del padre
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador ("Matthew", 24, "Java")
console.log(nuevodev)
nuevodev.saludo()
