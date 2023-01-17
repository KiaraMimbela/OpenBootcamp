// Strings 

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sim = 'Hola soy un texto con comillas simples';

console.log(str_dbl);
console.log(str_sim);

let str_comillas = "El otro día me dijó 'Ve a sacar la basura'";

console.log(str_comillas);

// comillas invertidas
// permite insertas vaariables dentro del string

let nombre = "Laura";
let saludo = `Hola, ${nombre} bienvenido`
console.log(saludo);

// plantillas html

let plantilla = `
    <html>
        <h1>Página web de ${nombre}</h1>
        <p>Esto es un párrafo</p>
    </html>
`

console.log(plantilla);

// métodos más utilizados con strings

// obtener su longitud
let frase = "Esto es una frase inspiradora";
console.log(frase.length);

// obtener partes de strings 

// slice(posición donde empieza, posición donde termina)
let slice_frase = frase.slice(18, 29);
console.log(slice_frase);

// sunstring(empieza, termina)
let subs_frase = frase.substring(18, 29);
console.log(subs_frase);

// deprecada
// substr(posición, longitud de lo que va a cortar)
let substr_frase = frase.substr(0, 8);
console.log(substr_frase);

// reemplazar parte del contenido de un string
let cadena = "Hola mi nombre es Kiara";
console.log(cadena);

// al utilizar strings sólo reemplaza la primera instancia
cadena2 = cadena.replace('Kiara', 'Naomi');
console.log(cadena2);


let texto = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles"
// al utilizar strings sólo reemplaza la primera instancia
console.log(texto.replace('los', 'cinco'));

// al utilizar la espresión regular /g (global), reemplaza todas las instancias
console.log(texto.replace(/los/g, 'cinco'));

// formas de concatenar string
let str_1 = "Soy la primera cadena";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// eliminar espacios al inicio y al final
let str_3 = "   Hola soy un string con espacios demás.   ";
console.log(str_3.length);

//trim() - elimina espacios vacíos
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// obtener el carácter que existe en cierta posición
let str_4 = "Hola, soy yo. El string número 4."
console.log(str_4.charAt(31));
console.log(str_4[31]);

// obtener posición de una palabra dentro de un string
let str_5 = "Hola soy Kiara y me gusta el manga. Mi nombre completo es Kiara Naomi."
console.log(str_5.indexOf("Kiara"));
// primera instancia de la palabra
console.log(str_5.lastIndexOf("Kiara"));
// segunda instancia de la palabra
console.log(str_5.indexOf("Mimbela"));
// en caso no exista saldrá una posición negativa

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles";

// encontrar todas las instancias donde se encuentra la palabra
console.log(texto_largo.match(/no/g));

// ¿existe la palabra en el texto?
console.log(texto_largo.includes("terremoto"));

// saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));

// saber si un texto termina con una palabra
console.log(texto_largo.endsWith("árboles"));