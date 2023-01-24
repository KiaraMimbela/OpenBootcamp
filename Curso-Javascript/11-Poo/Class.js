// class de tipo persona
class Persona {
    // nombre // no es necesario ponerlo
    // edad     // son variables dentro de la clase
    // isDeveloper

    constructor(nombre, edad, isDeveloper) {
        // asignandole el valor a las variables
        this.nombre = nombre 
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    //funciòn
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
        // se debe colocar this. para referirse a la variable de la clase fuera de la función
    }
}

const nueva_persona = new Persona("Kiara", 21, true);
console.log(nueva_persona)
nueva_persona.saludo();

//incializar
let numero = 60;
console.log(typeof numero)

// instanciar
let persona2 = new Persona("María", 34, false);
console.log(typeof persona2)

// instanceof => similar al typeof pero para clases, nos puede indicar de que clase es
console.log(persona2 instanceof Persona)