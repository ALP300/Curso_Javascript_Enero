//1. Determina el mayor de tres números:
//Declara tres variables a, b y c con valores numéricos y utiliza condicionales
//para determinar cuál de ellos es el mayor.
let a= 10;
let b= 7;
let c= 7;
if(a>=b && a>=c){
    console.log("El mayor es: ",a);
} else if(b>=c && b>=a){
    console.log("El mayor es: ",b);
}else{
    console.log("El mayor es: ",c);
}