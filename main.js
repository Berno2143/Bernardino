// alert ("Hola mundo");
 
var Nombre = 'Bernardino';
var Apellido = 'A. Tomas'; 
var edad = 19;

console.log( Nombre, Apellido )
console.log( Nombre + ' ' + Apellido );
console.log( 'Mi edad es:' + edad);

var numero = 11;
var otronumero = "11";


console.log(typeof(numero));
console.log(typeof(otronumero));

// requisitos 

var nombre = prompt('¿Cual es tu nombre?');
var edad = prompt('¿Cual es tu edad?');

if (edad>=18 && edad<=29){ 
    alert ("Felicidades ya eres miembro de Generation.");}
 else if (edad<18){
    alert ("Lo lamento usted no cumple con los requisitos.");}
if (edad>=30){
    alert ("Lo lamento usted no cumple con los requisitos.");}

// suma resta multiplicacion y divicion 

var numero= parseInt(prompt("Escoge un número"));
var otronumero= parseInt(prompt("Escoge otro numero"));
var suma= (numero + otronumero );
var resta= parseInt(prompt("restalo por cualquier numero"));
var restar= (suma - resta)
var multiplicacion= parseInt(prompt("ahora multiplicalo por un numero"));
var multiplicar= (restar * multiplicacion)
var dividir= parseInt(prompt("ahora dividelo por el numero que tu quieras"));
var divicion = (multiplicar / dividir )
alert ("tu reultado total es: " + divicion)
 
// Salaario 

alert("Este programa calcula su sueldo quincenal / mensual"); 

var SalarioDiario = prompt("Ingresa tu salario diario"); 

var DiasLaboradosQ = 15; 
var DiasLaboradosM = 30;

var SueldoBrutoQ = SalarioDiario * DiasLaboradosQ;
var SueldoBrutoM = SalarioDiario * DiasLaboradosM;

var ISR_quincenal = SueldoBrutoQ * 0.30;
var ISR_mensual = SueldoBrutoM * 0.30;

var IMSS_quincenal = SueldoBrutoQ * 0.10;
var IMSS_quincenal = SueldoBrutoM * 0.10;

var Impuestos_Q = ISR_quincenal + IMSS_quincenal; 
var Impuestos_M = ISR_mensual + ISR_mensual;

var SueldoNetoQ = SueldoBrutoQ - Impuestos_Q; 
var SueldoNetoM = SueldoBrutoM - Impuestos_M;

console.log("Mi salario quincenal bruto es: " + SueldoBrutoQ);
console.log("Mi salario mensual bruto  es: " + SueldoBrutoM);
console.log("Mi salario neto quincenal es: " + SueldoNetoQ);
console.log("Mi salario neto mensual es: " + SueldoNetoM); 

// parametros 

function sum (num1,num2){
    return num1+num2;
}
console.log (sum(32,33));
console.log (sum(34,35));
console.log (sum(36,37));
console.log (sum(38,39));
console.log (sum(40,41));

// meses

var meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
console.log ("Los meses del año son: " + meses);

// ciclo for 

for (var i = 0; i < meses.length; i++){
    console.log (meses[i]);
}

// objetos 
/** 
var nombreObjeto= {
    //Atributos 
    atriburo1: "cadena1",
    atributo2: "cadena2",
    atributo3: entero,
   //Funciones
   nombreFuncion: function(parametro1,param2...){
      //Hacer algo con los parametros
   },
   funcion2: function(){
     console.log("Hi");
   }
 }
 
 
 // Forma 2:
 var nombreObjeto= new Object();
 //Agregar atributos
 nombreObjeto["atributo"]= "atributoCadena";
 //Agregar funciones
 nombreObjeto.nombreFuncion = function() { alert("¡Lo que quieres que haga tu función!"); }
 **/

// se calcula el triangulo

/** 

var base = parseInt(prompt ("Escribe la base del triangulo"));
var altura = parseInt(prompt ("Escribe la altura del triangulo"));
var resultado = ( base * altura ) / 2;

alert('El area el triangulo es:' +  resultado);

*/

    