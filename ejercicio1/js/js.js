let figura_correcta = false;
let radio = 0;
let base = 0;
let altura = 0;
let lado = 0;
let resultado = 0;

while (!figura_correcta) {
  let num_figura = prompt(
    "Inserte el número de la figura que quiere calcular Circulo->1 Triangulo->2 Cuadrado->3"
  );

  if (num_figura == 1 || num_figura == 2 || num_figura == 3) {
    figura_correcta = true;
  } else {
    alert("Figura incorrecta !");
  }

  switch (parseInt(num_figura)) {
    case 1:
      radio = prompt("Inserte el radio del círculo");
      resultado = Math.pow(radio, 2) * Math.PI;
      break;
    case 2:
      base = prompt("Inserte la base");
      altura = prompt("Inserte la altura");
      resultado = (base * altura) / 2;
      break;
    case 3:
      lado = prompt("Inserte la longitud del lado");
      resultado = Math.pow(lado, 2);
      break;
    default:
      break;
  }

  alert("El resultado es: " + resultado);
}
