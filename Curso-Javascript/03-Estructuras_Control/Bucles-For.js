// Bucles for

for (let i = 0; i < 10; i++) {
    // Esto es el bucle
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];

for(let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// Estructura de for of
for(let valor of lista) {
    console.log(valor);
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor);
})

let persona = {
    nombre: "Kiara",
    apellido: "Mimbela",
    edad: 21,
    isDeveloper:true
}
console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

// Estructura forIn
for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}