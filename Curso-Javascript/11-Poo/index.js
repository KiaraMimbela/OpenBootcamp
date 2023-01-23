const persona = {
    nombre: "Kiara",
    edad: 21,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola')
    }
}

persona.saludo();

const otraPersona = {
    nombre: "Naomi",
    edad: 20,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola')
    }
}

otraPersona.saludo();

// función factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello');
        }
    }
}

const nuevaPersona = creaPersona("Juan", 31, false);
console.log(nuevaPersona);