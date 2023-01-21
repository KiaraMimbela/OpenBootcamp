// funciones flecha - funciones anónimas

const array = [1, 5, 4, 64, 42, 2, 5];

const array2 = array.map((valor) => valor * 2);

console.log(array2);

//
const dobleDelValor = valor => valor * 2;
// para usar las funciones flecha deben declararse primero
console.log(dobleDelValor(6));
console.log(doble(6));

const array3 = array.map(dobleDelValor);
console.log(array3);

//función
function doble (valor) {
    return valor * 2;
};