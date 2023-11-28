let array = [];
let anyade_valor = (num) =>{
    array.push(num);
}
let muestra_valor = (i) =>{
    console.log("posicion "+i+" es "+array[i]);
}
for (let i = 0; i < 10; i++) {
    num = prompt("Inserta un numero :");
    anyade_valor(num);
    muestra_valor(i)
}
