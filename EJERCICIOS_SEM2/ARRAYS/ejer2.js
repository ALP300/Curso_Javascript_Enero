///Sumar números de un array
///Crea una función que reciba un array 
// de números y devuelva la suma de todos sus elementos.
function sumarArray(numeros){
    return numeros.reduce((acumulador, numero) => acumulador+numero,0 );
}
const numeros=[3,4,56,65,76]
console.log(sumarArray(numeros));