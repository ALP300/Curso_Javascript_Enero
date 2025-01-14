//Multiplicar todos los elementos
//Escribe una función que reciba un array 
// de números y devuelva un nuevo array con 
// cada número multiplicado por un valor dado.
function multiplicarArray(array, multiplicador){
    return array.map(num=>num*multiplicador)
}
const numeros=[2,3,4,5,6]
console.log(multiplicarArray(numeros,3))