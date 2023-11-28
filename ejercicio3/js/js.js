let comprobar_primo =(num)=> {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}


let numero = prompt("Ingresa un número:");
let es_primo = comprobar_primo(numero);

if (es_primo) {
    console.log(numero+' es un número primo.');
} else {
    console.log(numero+' no es un número primo.');
}

