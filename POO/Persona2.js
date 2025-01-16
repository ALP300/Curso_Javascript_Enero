class Persona{
    constructor(nombre,edad, pais="Perú"){
        this.nombre=nombre;
        this.edad= edad;
        this.pais=pais;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años y soy de ${this.pais}.`);
    }
}
const persona= new Persona("Leonardo",91,"México")
persona.saludar();
