let num = prompt('Ingresa un número decimal:');
let binario = decimal_binario(num);

console.log('El binario de '+num+' es: '+binario);

let decimal_binario=(num)=> {
    let binario = num==0? "0":"";
    while (num > 0) {
        let resto = num % 2;
        binario = resto + binario;
        num = Math.floor(num / 2);
    }
    return binario;
}