let rellena_array = (num_cant, num_max, num_min) => {
    for (let index = 0; index < num_cant; index++) {
            num = Math.floor(Math.random() * num_max) + num_min
            array.push(num);
            if (  num % 10 === parseInt(num_acaba)){
            array_terminacion.push(num)    
            }
    }
}

let muestra_array = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        console.log("el valor " + index + " es " + array[index]);
    }
}

let num_cant = prompt("¿Cuántos números quieres?");
let comprobacion = false;
let num_acaba = 0;
while(!comprobacion){
     num_acaba = prompt("En que numero acaba?");
    if (isNaN(num_acaba) || num_acaba < 0 || num_acaba > 9) {
        alert("Por favor, introduce un numero valido (0-9)");
    }else{
        comprobacion = true;
    }

}

let array =  [];
let array_terminacion = []
rellena_array(num_cant,300,0)
console.log("Array aleatoria :")
muestra_array(array);
console.log("Array terminación :")
muestra_array(array_terminacion);


