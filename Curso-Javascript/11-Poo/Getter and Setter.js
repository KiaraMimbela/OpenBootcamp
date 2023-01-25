class Persona {
    // atributos private => # => solo se puede acceder desde dentro de la class
    #nombre
    #edad

    // atributos protected => _ => solo se puede acceder desde dentro de la class y desde class descendientes
    _isDeveloper = true

    constructor(nombre, edad) {
        this.#nombre = nombre 
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`)
    }

    obtenNombre() { // función getter => nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaEdad) { // función setter => nos permite cambiar valores de los atributos
        this.#edad = nuevaEdad
    }
}

// instanciando
const persona = new Persona("Naomi", 20);
console.log(persona);
// accediendo a sus atributos 
console.log(persona.nombre)
console.log(persona.obtenNombre())
// accediendo a la función
persona.saludo();
// accediendo a la función privada de edad
console.log(persona._isDeveloper)

// getter => métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)
// setter => métodos que nos permiten cambiar el valor de alguna de los atributos privados o protegidos
// quiero cambiar la edad de la persona
persona.setEdad(15)
console.log(persona.getEdad())