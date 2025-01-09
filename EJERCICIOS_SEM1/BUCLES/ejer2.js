//Ejercicio 2: Calcular el producto de los números del 1 al N
//Descripción: Pide un número N y calcula el producto de 
//todos los números entre 1 y N (es decir, el factorial de N).
let n= 20;
let producto=1;
for(let i=1; i<=n;i++){
    producto*=i;
}
console.log("El producto es: "+producto)