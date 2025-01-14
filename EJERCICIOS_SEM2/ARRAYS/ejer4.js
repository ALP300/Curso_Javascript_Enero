//Ordenar un array numérico
//Crea una función que reciba un array 
// de números y lo devuelva ordenado de menor a mayor.
//sort
function ordenarArray(numeros){
    return numeros.sort((a, b) => a - b)
}
const numeros=[6,23,4,45,2,6,2,43,24,52,54]
console.log(ordenarArray(numeros))