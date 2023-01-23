import { curso, suma } from './modulos/matematicas.js';
import * as moduloMatematicas from './modulos/matematicas.js';
import getAutor, {libro} from './modulos/literatura.js';

const sum = suma(2, 4);
console.log(sum);

const potencia = moduloMatematicas.eleva(2, 12);
console.log(potencia);

console.log(curso);

console.log(getAutor());

console.log(libro);