//Pedir un número positivo
//Crea un programa que pida al usuario ingresar 
// un número positivo. Si el número ingresado es 
// negativo o cero, el programa debe seguir 
// pidiendo un número hasta que el usuario ingrese un número positivo.

let numero;
do{
    numero=parseInt(prompt("Introduce un número positivo: "))
}while(numero<=0);

console.log("El número positivo es: "+numero)