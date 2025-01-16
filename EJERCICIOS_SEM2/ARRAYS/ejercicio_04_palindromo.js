//diego santos
//leonardo
function esPalindromo(texto) {
    // lo convierto a minusculas, y elimino los caracteres
    let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');

    //comparo las   
    return textoLimpio === textoLimpio.split('').reverse().join('');
}

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola")); // false
console.log(esPalindromo("ANA")); //TRUE
console.log(esPalindromo("OSO")); //TRUE