// String (cadena de texto)
let name = "Jorge"
let alias = "Phoepik"
let email = "Jorge@gmail.com"

// Números (number)
let age = 3 // Entero
let height = 1.81 // Decimal

// Booleanos (boolean)
let isStudent = true
let isTeacher = false 

// Undefined
let undefinedValue // declarada pero no inicializada
console.log(undefinedValue)

// Null
let nullValue = null // declarada, inicializada pero puesto null a consciencia
// Symbol
let mySymbol = Symbol("mysymbol")

// BigInt
let myBigInt = BigInt(754895794875894758947398057438957430957)
let myBigInt2 = 754895794875894758947398057438957430957n

// Mostramos los tipos de datos
console.log( typeof name)
console.log( typeof alias)
console.log( typeof email)

console.log( typeof age)
console.log( typeof height)

console.log( typeof isStudent)
console.log( typeof isTeacher)

console.log( typeof undefinedValue)

console.log( typeof nullValue) // es dato primitivo, pero la variable Object

console.log( typeof mySymbol)

console.log( typeof myBigInt)
console.log( typeof myBigInt2)