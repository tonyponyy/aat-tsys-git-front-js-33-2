let num_cant = prompt("¿Cuántos números quieres?");
let num_max = prompt("¿Cuál es el número máximo?");
let num_min = prompt("¿Cuál es el número mínimo?");

let numero_aleat = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < num_cant; i++) {
    console.log(numero_aleat(num_max, num_min));
}