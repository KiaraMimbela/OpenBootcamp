// objeto con mis datos personales
const misDatos = [{
    nombre: "Kiara",
    apellido: "Mimbela",
    edad: 21,
    altura: 1.55,
    eresDesarrollador: true,
}];

// variable que obtenga la edad
const prop = misDatos.edad;

// lista que contenga el objeto con mis datos y uno nuevo con datos personales de dos amigos
const amigos = [
    {
    ...misDatos
    },
    {nombre: "Dayana",
    apellido: "Gamarra",
    edad: 21,
    altura: 1.60,
    eresDesarrollador: false,
    },
    {nombre: "Cynthia",
    apellido: "Martinez",
    edad: 30,
    altura: 1.70,
    eresDesarrollador: true,
    },
];

// ordenar por edad, de mayor a menor
const amigos2 = amigos.sort((a,b) => b.edad - a.edad);
console.log(amigos2);