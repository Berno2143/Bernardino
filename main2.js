// objeto
function persona(nombre1,apellido1,edad1){
    this.nombre1=nombre1;
    this.apellido1=apellido1;
    this.edad1=edad1;
    
    console.log('hola ' + this.nombre1 + " " + this.apellido1);
    console.log("tu edad es: " + this.edad1);
  }
  
  var parametros =function(){
    var nombre=prompt('cual es tu nombre: ');
    var apellido=prompt('cual es tu apellido: ');
    var edad=prompt('cual es tu edad: ');
  
    return persona(nombre,apellido,edad);
  }
  parametros();