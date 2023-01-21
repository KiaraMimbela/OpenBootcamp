// fechas

// declarar la fecha actual
const fechaActual = new Date();
console.log(fechaActual);

// Ener0 => 0 / Diciembre => 11

// inicializando una fecha
const fecha = new Date(1987, 10, 20, 1, 23, 53, 193);
// se puede definir hasta la hora
console.log(fecha);

// inicializandola por los milisegundos
const fechaMili = new Date(-1000000000000);
console.log(fechaMili);

// declarando la fecha con un string
const fechaStr = new Date("October 23, 2000 12:34:44");
console.log(fechaStr);

// comparando fechas, su posterioridad
console.log(fechaActual < fechaMili)

// estableciendo un new date con el mismo valor de fecha
const fecha2 = new Date(1987, 10, 20, 1, 23, 53, 193);
console.log(fecha2);

// ERROR - no se puede comparar de esta forma
console.log(fecha === fecha2);

// OK- se compara por los milisegundos usando => .getTime()
console.log(fecha.getTime === fecha2.getTime);

// obtener el día de una fecha => .getDate()
console.log(fecha.getDate());

// obtener el mes de una fecha => .getMonth() Enero - 0 / Diciembre - 11
// se le suma uno para poder entenderlo en idioma humano
console.log(fecha.getMonth() + 1);

// obtener el año de una fecha => .getFullYear()
console.log(fecha.getFullYear());

// truco para mostrar la fecha en front => .toLocaleDateString(formato que se va a mostrar)
console.log(fecha.toLocaleDateString("en-US"));