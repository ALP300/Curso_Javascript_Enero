//Luigi
//Sebastian
//Briyit

function ConvertirGrados(temperatura,tipo){

     if (tipo=="C"){
        return (temperatura*9)/5 +32
     }else if (tipo=="F"){
        return ((temperatura-32)*5)/9
     }
}

console.log(ConvertirGrados(120,"C"))
console.log(ConvertirGrados(230,"F"))