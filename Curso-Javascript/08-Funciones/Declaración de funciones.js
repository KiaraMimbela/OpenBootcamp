//  funciones

// funcion de saludar
function saludar (nombre) {
    console.log(`Hola ${nombre}`);
};
saludar("Naomi");

const nom = "Kiara";
saludar(nom);

// ejemplo de definir el nombre en la función
function despedir (nombre) {
    nombre = "Diego";
    console.log(`Adiós ${nombre}`);
};
// a pesar de estar usando otra variable, se imprime el nombre definido en la función
let nombre_2 = "Juan";
despedir(nombre_2);
// el valor no se sobrescribe
console.log(nombre_2);

// ejemplo de función con un objeto de parámetro
let persona = {nombre: "Laura", apellido: "Vasquez"};
console.log(persona);

function saludarPersona (objeto) {
    objeto.apellido = "Icaza";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
};
// al definir el apellido en la función y ejecutarla, el valor en el objeto se sobrescribe
saludarPersona(persona);
console.log(persona);

// funciones con parámetros por defecto
function imprimeNumero (numero = 7) {
    console.log(numero);
};
imprimeNumero();
imprimeNumero(9);

// funciones con parámetros indeterminados, con factor de propagación
function imprimir (...parametros) {
    console.log(parametros);
};
imprimir(1, 4, "Hola", {id:5});

// ejemplo con una suma
function suma (...nums) {
    return nums.reduce((a, b) => a + b);
}
const s = suma(1, 2, 3, 5, 10);
console.log(s);

// función que retorne algo => return
function multiplicar (a = 0, b = 0) {
    return a * b;
};
console.log(multiplicar(3, 4));