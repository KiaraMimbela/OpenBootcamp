// Bifurcaciones

let saldo =50;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
} else {
    console.log("Saldo insuficiente");
}

let nota =5;
if (nota == 5) {
    console.log("Aprobaste");
} else if (nota == 4) {
    console.log("Se puede mejorar");
} else {
    console.log("Ingrese un nùmero del 1 al 5");
}

switch (nota) {
    case 5:
        console.log("Buen trabajo");
        break;
    case 4:
        console.log("Se puede mejorar");
        break;
    case 3:
        console.log("Se puede mejorar");
        break;
    case 2:
        console.log("Se puede mejorar");
        break;
    case 1:
        console.log("Se puede mejorar");
        break;
    default:
        console.log("Error");
        break;
}