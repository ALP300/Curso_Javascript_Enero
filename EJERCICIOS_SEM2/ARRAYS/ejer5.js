//Encontrar el elemento más grande
//Crea una función que reciba un array 
// de números y devuelva el elemento más grande.

function mayor(array){
    return Math.max(...array);
}
const numeros=[3,8,34,3,3,5]

console.log(mayor(numeros))