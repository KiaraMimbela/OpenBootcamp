// trabajar con listas (arrays, vectores)
let var1 = 45;
let array = [1, "Hola", true, {id: 5}, null, undefined, var1];

console.log(array);

// acceder a los valores del array a través de su posición
// array[indice]
console.log(array[0]);
console.log(array[2]);

// ingreso de nuevos valores a la array, mutan el valor del array
// . push() - ingresa valores al final
array.push("final");
console.log(array);
// . unshift() - ingresa el valor al incio
array.unshift("inicio");
console.log(array);

// eliminar un valor en la array, mutan el valor del array
let array2 = [1,2,3,4]
// .pop() - eliminar valores del final
array2.pop();
console.log(array2);
// .shift() - eliminar valores del incio
array2.shift();
console.log(array2);

// método para eliminar, modificar o añadir valores al array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];

// eliminar => .splice(indice de posición, cantidad de elementos)
array3.splice(2, 2);
console.log(array3);

// añadir => .splice(indice de posición, 0-este es para eliminar, valores a agregar)
array3.splice(2, 0, "Hola");
console.log(array3);

// modificar valores => .splice(indice de posición, 1-cantidad de elemento, valor a agregar)
array3.splice(2, 1, 3);
console.log(array3);

// unir dos listas => .concat(segundo elemento)
const lista1 = ["Hola", 2, false, null];
const lista2 = ["Adiós", 8, true, undefined];

console.log(lista1.concat(lista2));
// no altera sus valores
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);

// unir listas con factor de propagación => ...
console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);

// ERROR DE CONCEPTO DE PROPAGACIÓN!
const lista5 = [lista1, lista2];
// se crea una lista que contiene dos listas
console.log(lista5);

// obtener una lista a partir de otra => .slice()
const array4= ["Hola", 1, 2, 2, true, null, "adiós"];

// .slice() - no modifica el valor del array incial
// .slice(indice de valor incial, indice de valor final)

// si no se le pone limite va hasta el final
const arrayPrueba = array4.slice(3);
console.log(arrayPrueba);

const array5 = array4.slice(2, 5);
console.log(array5);

const array6 = array4.slice(2, -2);
console.log(array6);

// iterar los valores de una lista
const arreglo = ["hola", 2, 5, 90, false, undefined];

// forma antigua (poco eficiente)
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

// forma ES6 (más eficiente) => .forEach()
arreglo.forEach(element => {
    console.log(element);
});

let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
});
console.log(suma);

// búsqueda de un valor dentro de una lista => .find()

// quiero encontrar el elemento 6 de arrayNums
const variable = arrayNums.find(valor => {
    if (valor === 6) {
        return true;
    }
});

console.log(variable);

// en lista de objetos, buscar la edad de Matthew
const listaObjetos = [
    {nombre: "Laura", edad: 40},
    {nombre: "Victor", edad: 17},
    {nombre: "Christian", edad: 22},
    {nombre: "Kiara", edad: 21},
    {nombre: "Matthew", edad: 4}
]

// forma antigua
const objeto = listaObjetos.find(valor => {
    if (valor.nombre === "Matthew") {
        return true;
    }
})
console.log(objeto);

// forma más corta
const object = listaObjetos.find(valor => valor.nombre === "Matthew");
console.log(object.edad);

// forma corta de buscar solo la edad
const { edad } =listaObjetos.find(valor => valor.nombre === "Matthew");
console.log(edad);