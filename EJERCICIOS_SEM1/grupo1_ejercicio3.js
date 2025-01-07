/**Calculadora simple:
Declara tres variables: a (un número), operador (un operador aritmético como
cadena), y b (otro número). Utiliza condicionales para realizar la operación
correspondiente y muestra el resultado. */

let a =parseInt(prompt("Ingrese el primer numero * a * ")) ; 
let operador=prompt("Ingrese opeador aritmetico:(+,-,*,/)") ; 
let b = parseFloat(prompt("Ingresa el segundo numero *b* ")) ; 
let resultado = 0 ; 
// let error="" ; 

if(operador==='+') { 
    resultado=a+b ; 
}
else if (operador==='-') { 
    resultado=a-b ; 
}
else if(operador==="*") { 
    resultado=a*b ; 
}else if (operador==="/") {
    if(b!==0){
        resultado=a/b ; 
    }else { 
        // error="Error al dividir por 0" ; 
        resultado="Error al dividir por 0" ; 
    }
}else { 
    // error="operador invalido" ;
    resultado="Error al dividir por 0" ; 
}

alert(`El resultado es : ${a} ${operador} ${b} : ${resultado}`) ; 