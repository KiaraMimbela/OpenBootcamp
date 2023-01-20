// .some() - si algun elemento del array cumple una condición

const array = [3, 7, 2, 4, 7, 9, 45, 26, -7, 561, 23];

const res = array.some(valor => valor < 0);
console.log(res);

const existe = array.some(valor => valor === 9);
console.log(existe);

// con listas de objetos

const listaObjetos = [
    {nombre: "Laura", edad: 40},
    {nombre: "Victor", edad: 17},
    {nombre: "Christian", edad: 22},
    {nombre: "Kiara", edad: 21},
    {nombre: "Matthew", edad: 4}
]

const existeVictor = listaObjetos.some(persona => persona.nombre === "Victor");
console.log(existeVictor);

// cómo obtener una lista a partir de un objeto iterable
// Array.from()

const str = "Hola soy Kiara";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "Hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

// generar un array iterador con los indices de nuestro array orginal
// convirtiendo a iterable
const keys = array.keys();
console.log(keys);

// accediendo a los indices
const ar_keys = Array.from(keys);
console.log(ar_keys);