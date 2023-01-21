// trabajando con objetos
const obj = {
    id: 4,
    nombre: "Victor",
    apellido: "Basombrio",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4],
};

// accediendo a sus valores
console.log(obj.id);
console.log(obj["4-juegos"]);

// una variable con una propiedad
const prop = "isDeveloper";
console.log(obj[prop]);

// replicar el objeto

// se iguala pero el espacio de memoria es el mismo, en caso de los objetos
const obj2 = obj;
console.log(obj2);

// el cambio se refleja en los dos
obj2.nombre = "Victoria";
console.log(obj2.nombre);
console.log(obj.nombre);

// caso contrario con las variables númericas
let val1 = 4;
let val2 = val1;

val2 = 6;

console.log(val1);
console.log(val2);

// replicar con el factor de propagación, no ocupan el mismo espacio de memoria
const obj3 = {...obj};

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Kiara";
console.log(obj.nombre);
console.log(obj3.nombre);

// como ordenar una lista de objetos en función de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2012}
];

console.log(listaPeliculas);

// ordenar por fecha 
// .sort() => muta el valor original del array

listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listaPeliculas);