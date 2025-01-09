//Ejercicio 3: Contar números pares e impares entre dos números
//Descripción: Pide al usuario dos números A y B 
// (donde A < B) y cuenta cuántos números son pares y cuántos impares en ese rango.
let a= 10
let b=20
let pares=0, impar=0
for(let i=a; i<=b; i++){
    if(i%2===0){
        pares++;
    }else{
        impar++;
    }
}
console.log("Los pares son: "+pares)
console.log("Los impares son: "+impar)
