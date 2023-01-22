// función sin parámetros que devuelva siempre "true"
function siempreTrue () {
    return true;
}

// función asíncrona que utilice setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function cincoSegundos () {
    setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

// una función generadora de índices pares automáticos
function* indices () {
    let i = 0
    while (true) {
        i = i + 2
        yield i
    }
}

const indi = indices();

console.log(indi.next());
console.log(indi.next());