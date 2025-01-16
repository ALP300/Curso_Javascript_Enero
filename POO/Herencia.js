class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad= edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Empleado extends Persona{
    constructor(nombre,edad,salario){
        super(nombre,edad);
        this.salario=salario;
    }

    trabajar(){ 
        console.log (`Hola, mi salario es ${this.salario}`)
    }
}

const empleado=new Empleado("Leo",45,1500)

empleado.trabajar()

