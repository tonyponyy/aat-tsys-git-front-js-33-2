num = prompt("Elige un numero para hacer el factor")
let factorial= (numero)=> {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}
console.log("el factorial de "+num+" es "+factorial(num))