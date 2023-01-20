// métodos más avanzados

// .map() - agregar algo al elemento del array
const array = ["Nuñoa", "Santiago", "Puente Alto", "Condes", "Vitacura"];

const element = array.forEach(valor => {
    console.log(valor);
})
// no imprime nada porque no es su función
console.log(element);

// agregar un  " 1- " a los elementos
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

// .filter() - generar filtros en los areglos
const listaObjetos = [
    {nombre: "Laura", edad: 40},
    {nombre: "Victor", edad: 17},
    {nombre: "Christian", edad: 22},
    {nombre: "Kiara", edad: 21},
    {nombre: "Matthew", edad: 4}
]

// forma antigua
const personasMayores = listaObjetos.filter(object => {
    if (object.edad > 18) {
        return true;
    } else {
        return false;
    }
});
console.log(personasMayores);

// forma más avanzada
const adultos = listaObjetos.filter(object => object.edad > 18);
console.log(adultos);

// formar una lista excluyendo un elemento
const newList = listaObjetos.filter(object => object.nombre !== "Kiara");
console.log(newList);

// .reduce() - obtener algo apartir de una lista
const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, numeroActual, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(numeroActual);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + numeroActual;
});
console.log(suma);

// .sort() => modfica el array
const arreglo = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(arreglo);

// ordenando los números - forma antigua
arreglo.sort((a, b) => {
    if(a < b) {
        return -1;
    } else if (a > b) {
        return +1;
    } else {
        return 0;
    }
});
console.log(arreglo);

// ordenar únicamente arrays numéricos
const arrayNumerico = [4, 1, 7, 13, 1, 3, 56, 1, 546];

arrayNumerico.sort((a, b) => a - b);
console.log(arrayNumerico);

// INTERESANTE EN ARRAYS DE OBJETOS
const listaObjetos2 = [
    {nombre: "Laura", edad: 40},
    {nombre: "Victor", edad: 17},
    {nombre: "Christian", edad: 22},
    {nombre: "Kiara", edad: 21},
    {nombre: "Matthew", edad: 4}
];
listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return +1;
    } else if (a.edad > b.edad) {
        return -1;
    } else {
        return 0;
    }
});
console.log(listaObjetos);

// forma más simple
listaObjetos2.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos2);

// comparar listas

// .every() => comparar valor de las listas
const arreglo2 = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];
// si los valores son mayores que 0
// const resultado = arreglo2.every(valor => {
//     if (valor > 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
const resultado = arreglo2.every(valor => valor > 0);
console.log(resultado);

// comparación de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

// forma incorrecta de comparar listas
console.log(ar1 === ar2);

// creando función que compare las listas
const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false;
    const res = array_1.every((valor, i) => valor === array_2[i]);
    return res;
};

console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 3, 6];
console.log(compararArrays(ar1, ar3));