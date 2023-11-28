
let num_cant = prompt("¿Cuántos números quieres?");
let array =  [];

let rellena_array = (num_cant, num_max, num_min) => {
    for (let index = 0; index < num_cant; index++) {
        num= 4;
        while (!comprobar_primo(num)){
            num = parseInt(Math.random() * (num_max - num_min + 1)) + parseInt(num_min)     
        }
        array.push(num);
    }
}

let muestra_array = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        console.log("el valor " + index + " es " + array[index]);
    }
    let grande = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] > grande){
            grande = array[index];
        }
        
    }
    console.log("el numero mas grande es: " + grande);
}


let comprobar_primo=(num)=> {
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


rellena_array(num_cant, 1400, 1);
muestra_array(array);