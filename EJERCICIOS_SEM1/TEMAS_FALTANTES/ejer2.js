//Calculadora básica
//Implementa un programa que
// reciba dos números y un operador
// (+, -, *, /) y use un switch para
// realizar la operación correspondiente.
// `
let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));
let operador = prompt("Introduce el operador (+,-,*,/): ");

switch (operador) {
  case "+":
    console.log(`Resultado: ${num1 + num2}`);
    break;
  case "-":
    console.log(`Resultado: ${num1 - num2}`);
    break;
  case "*":
    console.log(`Resultado: ${num1 * num2}`);
    break;
  case "/":
    if(num2===0){
        console.log(`Error`);
    }else{
        console.log(`Resultado: ${num1 / num2}`);
    }
    break;
    default:
        console.log("Operador no válido")

  
}
