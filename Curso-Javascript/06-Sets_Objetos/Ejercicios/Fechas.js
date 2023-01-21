// fecha de hoy
const actual = new Date();

// fecha de mi nacimiento
const nacimiento = new Date(2002, 0, 8, 11, 50);

// variable que indique si hoy es más tarde que mi fecha de tu nacimiento
const mayor = actual > nacimiento;

// variable con el día de mi nacimiento
const dia = nacimiento.getDate();

// variable con el día del mes de mi nacimiento
const mes = nacimiento.getMonth() + 1;

// variable con el año de mi nacimiento
const anyo = nacimiento.getFullYear();