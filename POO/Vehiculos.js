//Ejercicio: Sistema de Vehículos
//Pregunta:
//Crea una clase base llamada Vehiculo con los siguientes atributos y métodos:
//Atributos: marca, modelo, año.
///Métodos:
//detalles(): Imprime la información básica del vehículo.
//Crea dos clases hijas que hereden de Vehiculo:
//Auto:
//Atributo adicional: puertas (cantidad de puertas).
//Sobreescribe el método detalles() para incluir la cantidad de puertas.
///Moto:
///Atributo adicional: tipo (puede ser "Deportiva", "Touring", etc.).
//Sobreescribe el método detalles() para incluir el tipo de moto.
//Crea instancias de ambas clases y muestra cómo el polimorfismo permite 
// llamar al método

class Vehiculo{
    constructor(marca, modelo, año){
        this.marca= marca;
        this.modelo=modelo;
        this.año= año;
    }
    detalles(){
        console.log(`Vehiculo ${this.marca} Modelo ${this.modelo} Año ${this.año}.`);

    }
}

class Auto extends Vehiculo{
    constructor(marca,modelo,año, puertas){
        super(marca,modelo,año);
        this.puertas= puertas;
    }
    detalles(){
        console.log(`Vehiculo ${this.marca} Modelo ${this.modelo} Año ${this.año}. Puertas ${this.puertas}.`);

    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,año, tipo){
        super(marca,modelo,año);
        this.tipo= tipo;
    }
    detalles(){
        console.log(`Vehiculo ${this.marca} Modelo ${this.modelo} Año ${this.año}.Tipo ${this.tipo}.`);

    }
}
//marca,modelo,año, puertas
const auto= new Auto("Toyota","Corolla",2022,4);
const moto= new Moto("Yamaha","Corolla",2023,"Deportiva");
auto.detalles();
moto.detalles();
