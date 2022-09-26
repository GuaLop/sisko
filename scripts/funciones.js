console.log("Sesion JS02 funciones");

//++++++++++++++++++++++ Funcion Declarada ++++++++++++++++++++++++++
/**
 * Este es un ejemplo de una funcion declarada (function declaration, function statement).
 * Realiza la multiplicacion de 2 numeros
 * estas si tienen hoisting
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicador 2 
 * @returns  resultado de la multiplicacion de a*b
 */
function multiplica(a, b){
   return a*b;
}

//llamado de la funcion declarada 
console.log("Multiplica 5*6 = " + multiplica(5, 6));

//++++++++++++++++++++++ Funcion Expresada ++++++++++++++++++++++++++
/**
 * Las funciones expresada (function expressions) 
 * son declaradas dentre de la adignacion de una variable
 * Estas funciones pueden ser anonimas (no tener nombre)
 * las funciones expresadas no tienene hoisting. 
 */

/**
 * sumatoria de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */

const suma = function (a, b) {
    return a+b;
}
console.log("EL resultado de 56+4= " + suma(56, 4));


//++++++++++++++++++++++ Funcion autoinvocadas (anonimas) ++++++++++++++++++++++++++
/**
 * las funciones autoinvocadas (self-invoking functions)
 * pueden ser anonimas y se autoejecutan() en su declaracion.
 */

(function bienvenido (){
    console.log("--------------");
    console.log("Hola a todos");
    console.log("---------------");
})();

//++++++++++++++++++++++ Funcion flecha ++++++++++++++++++++++++++

/**
 * Las funciones flecha funciones similar a las funcioens
 * declaradas, pero no requieren la palabra "function" y si 
 * tienen una sola instruccion y es el retorno, no requiere la instruccion "return".
 */

const resta = (a, b) => a-b

console.log("La resta de 10-5= " + resta(10, 5));

/**
 * FUncion con parametros inicializados
 */

function divide(a, b=0){
    return a/b;
}
console.log("la division de a/b= " + divide(4));

//++++++++++++++++++++++ Funciones recursivas ++++++++++++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));   
}
console.log("Factorial de 4= " + factorial(4));


