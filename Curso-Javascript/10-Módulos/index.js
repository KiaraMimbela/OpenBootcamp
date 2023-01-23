// formas de importar/exportar módulos
// 1. CoomonJS - require
// 2. Import ES6 -import

// una forma de hacerlo
// const moduloMatematicas = require("./modulos/matematicas.js");

// const facto = moduloMatematicas.factorial;

// const fact = facto(5);
// console.log(fact);

// const sum = moduloMatematicas.suma(8, 90);
// console.log(sum);

// otra forma más sencilla
const {factorial, suma} = require("./modulos/matematicas.js");

const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);