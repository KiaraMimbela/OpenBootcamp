// funciones asíncronas 
function miAsinc () {
    // hace una llamada a una base de datos externa
    // puede darnos algún error
}

// se definen a traves de las promesas

// promesas
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    if (i !== 0) {
        resolve();
    } else {
        reject();
    }
});

miPromesa
    .then (() => console.log("Se ha ejecutado de forma correcta"))
    .catch (() => console.log("ERROR"))
    .finally (() => console.log("Yo me ejecuto siempre"))