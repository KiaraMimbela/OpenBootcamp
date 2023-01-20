// lista de compras - mínimo de 5 elementos
let compras = ["Aceite", "Arroz", "Atún", "Fideos", "Huevo"];
// agregando aceite de girasol
compras.push("Aceite de girasol");
console.log(compras);
// eliminando aceite de girasol
compras.pop();
console.log(compras);

// lista de películas favoritas
const peliculasFav = [
    {titulo: "Los indestructibles 3", director: "Patrick Hughes", fecha: new Date(2014,07,21)},
    {titulo: "La casa del lago", director: "Alejandro Agresti", fecha: new Date(2006,05,16)},
    {titulo: "Si tuviera 30", director: "Gary Winick", fecha: new Date(2004,03,23)}
];
// lista con películas posteriores al 1 de enero del 2010 => .filter()
const pelis = peliculasFav.filter(movies => movies.fecha > new Date(2010,00,01));
console.log(pelis);

// lista con los directores => .map()
const directores = peliculasFav.map(pelicula => {return pelicula.director});
console.log(directores);

// lista con los nombres de las películas => .map()
const titulos = peliculasFav.map(pelicula => {return pelicula.titulo});
console.log(titulos);

// concatenando lista de directores y lista de títulos => .concat()
const direcTitle = directores.concat(titulos);
console.log(direcTitle);

// concatenando lista de directores y lista de títulos => factor de propagación
const direcTitle2 = [...directores, ...titulos];
console.log(direcTitle2);