// factorial de 10 usando bucle, bifuraciòn y break

let num1 = 1;
let num2 = 10;

while (num2 > 1){
    num1 = num1 * num2
    num2--
    if(num2 == 1){
        break;
    }
}

console.log(num1);