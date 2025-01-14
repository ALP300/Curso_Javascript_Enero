//Combinar dos arrays
//Crea una función que reciba dos arrays 
// y devuelva un nuevo array que combine los elementos de ambos.
function combinarArray(array1, array2){
    return [...array1, ...array2]
}
const a=[1,2,3]
const b= [5,4,54,6]
console.log(combinarArray(a,b))
