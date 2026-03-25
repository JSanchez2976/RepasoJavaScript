// var
// no recomendable ya que permite acceder desde lineas superiores a la declaracion

// console.log(helloWorld)      No tira error pero no hace nada
var helloWorld = "Hello, JavaScript!"
console.log(helloWorld)

helloWorld = "Hola de nuevo, JavaScript!"
console.log(helloWorld)

// let
// declaracion estándar, no permite llamarla antes de declararla

// console.log(helloWorld2)
let helloWorld2 = "Hello, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// const

const helloWorld3 = "Hello, JavaScript 3!"
console.log(helloWorld3)

/*
ERROR
helloWorld3 = "Hola de nuevo, JavaScript 3!"
console.log(helloWorld3)
*/