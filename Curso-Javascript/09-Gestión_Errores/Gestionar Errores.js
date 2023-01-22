// errores en js

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    // para los errores, palabra clave
    throw new Error("El valor debe ser de tipo número")
}

const numero = "8";

try {
    // código que puede fallar
    console.log("Esta ejecutándose de manera correcta")
    const doble = miFuncion(numero)
} catch (e) {
    // en caso de que fallé
    console.error(e)
    console.error("ERROR!")
} finally {
    // se ejecuta de todas formas
    console.log("Esto se va a ejecutar de todas formas")
}