let multiplica_arrays = (ar1,ar2) =>{
    let res = []
    for (let i = 0; i < ar1.length; i++) {
        res[i] = ar1[i]* ar2[i];
    }
    return res

}

let rellena_array = (num_cant, num_max, num_min) => {
    array = [];
    for (let index = 0; index < num_cant; index++) {
        array.push(parseInt(Math.random() * (num_max - num_min + 1)) + parseInt(num_min));
    }
    return array;
}

let muestra_array = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        console.log("el valor " + index + " es " + array[index]);
    }
}

let num_cant = prompt("¿Cuántos números quieres?");
let array1 = rellena_array(num_cant,9,0);
let array2 = array1;
array2 = rellena_array(num_cant,9,0);
resultante = multiplica_arrays(array1,array2);
console.log("array1");
muestra_array(array1)
console.log("array2");
muestra_array(array2);
console.log("resultante")
muestra_array(resultante)

