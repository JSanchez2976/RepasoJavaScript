// 1. Escribe un comentario en una línea

// Hola


// 2. Escribe un comentario en varias líneas

/*
HOLA
HOLA
HOLA
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = "Jorge"
let age = 18
let isStudent = true
let dni = null
let undefinedValue
let mySymbol = Symbol("mysymbol")
let myBigInt = BigInt(3479834798324)


// 4. Imprime por consola el valor de todas las variables

console.log(name)
console.log(age)
console.log(isStudent)
console.log(dni)
console.log(undefinedValue)
console.log(mySymbol)
console.log(myBigInt)


// 5. Imprime por consola el tipo de todas las variables

console.log("\nTipos de datos:\n"+typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof dni)
console.log(typeof undefinedValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

name = "Pepe"
age = 34
isStudent = false
dni = null
undefinedValue
mySymbol = Symbol("mysymbol2")
myBigInt = BigInt(8888888888888888)

console.log("\nValores modificados:\n"+name)
console.log(age)
console.log(isStudent)
console.log(dni)
console.log(undefinedValue)
console.log(mySymbol)
console.log(myBigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = 3
age = "34"
isStudent = "si"
dni = Symbol("387498374")
undefinedValue = BigInt(3479834798324)
mySymbol = undefined
myBigInt = null

console.log("\nTipos modificados:\n"+typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof dni)
console.log(typeof undefinedValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const puntuacion = 42;
const mensaje = "Hola Mundo";
const activo = true;
const sinValor = undefined;
const vacio = null;
const poblacionMundial = 100n;
const claveSecreta = Symbol("unico");

console.log(puntuacion);
console.log(mensaje);
console.log(activo);
console.log(sinValor);
console.log(vacio);
console.log(poblacionMundial);
console.log(claveSecreta);


// 9. A continuación, modifica los valores de las constantes

/*
COMENTADAS YA Q NO SE PUEDEN MODIFICAR

puntuacion = 9.99;
mensaje = "Cambio de planes";
activo = false;
sinValor = undefined;
vacio = null;
poblacionMundial = 8000000000n;
claveSecreta = Symbol("secreto");

console.log("\nConstantes modificadas:\n"+puntuacion);
console.log(mensaje);
console.log(activo);
console.log(sinValor);
console.log(vacio);
console.log(poblacionMundial);
console.log(claveSecreta);
*/


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse