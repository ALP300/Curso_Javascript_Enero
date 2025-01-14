//ELIMINAR DUPLICADOR

function eliminarDuplicador(array){
    return [... new Set(array)]
   
}
const elementos= [1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1]
console.log(eliminarDuplicador(elementos))
