// Ejercicio 5: Factorial de un número
// Crea una función llamada factorial que 
// calcule el factorial de un número (el producto de todos 
// los números enteros positivos desde 1 hasta el número dado).

//Ericson

function factorial(array) {
    let resultado = 1;
    for (let i = 0; i < array.length; i++) {
        resultado *= array[i];
    }
    return resultado; 
}

const num = [1, 2, 3, 4, 5];
console.log(factorial(num));


