
let num_cant = prompt("¿Cuántos números quieres?");
let array =  [];

let rellena_array = (num_cant, num_max, num_min) => {
    for (let index = 0; index < num_cant; index++) {
        array.push(parseInt(Math.random() * (num_max - num_min + 1)) + parseInt(num_min));
    }
}

let muestra_array = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        console.log("el valor " + index + " es " + array[index]);
    }
    console.log("La suma de todos los valores es: " + sum);
}

rellena_array(num_cant, 9, 0);
muestra_array(array);