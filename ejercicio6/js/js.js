
let cuenta_cifras = (num)=> {
    if (!/^\d+$/.test(num) || num <= 0) {
        return -1; 
    }
    return num.toString().length;
}
let numero = prompt("Ingresa un numero");
let num_cifras = cuenta_cifras(numero);

if (num_cifras !== -1) {
    console.log("El numro de cifras en "+numero+" es: "+num_cifras);
} else {
    console.log("Numero incorrecto");
}

