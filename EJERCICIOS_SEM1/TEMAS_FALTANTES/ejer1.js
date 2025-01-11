//Días de la semana
//Escribe un programa que reciba un número del 1 al
// 7 y use un switch para imprimir el día
// correspondiente (1 para lunes, 2 para martes, etc.).
let numero = parseInt(prompt("Introduce un número del 1 al 7: "));
switch (numero) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;

  case 4:
    console.log("Jueves");
    break;

  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
    
  default:
    console.log("Número inválido")
}
