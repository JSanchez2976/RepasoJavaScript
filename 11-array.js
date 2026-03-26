// array

// Declaracion

let myArray = []
let myArray2 = new Array() // No recomendable

myArray = [3]
myArray2 = new Array(3) // Solo sirve para reservar datos

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Moure"
myArray2[1] = "mouredev"
//myArray2[2] = "Brais"

console.log(myArray2)

myArray = []
myArray[1] = "Brais"
myArray[2] = "mouredev"

console.log(myArray)

// Metodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("Mouredev")
myArray.push("37")

console.log(myArray)

console.log("Pop: " + myArray.pop()) // quita el ultimo elemento y lo retorna
console.log("Pop: " + myArray.pop())
console.log(myArray)

// shift y unshift
console.log("Shift: " + myArray.shift()) // quita el primer elemento y lo retorna
console.log("Tras el shift: " + myArray)

myArray.unshift("Brais", "Mouredev")
console.log(myArray);

// length
console.log("Longitud: " + myArray.length);

// clear
myArray = []
// myArray.length = 0 // alternativa no recomendable
console.log(myArray)

// slice
myArray = ["Brais", "Moure", "mouredev", 37, true]
let newArray = myArray.slice(1, 4) // no coge el ultimo
console.log(newArray)

// splice
myArray.splice(1, 3) // quita desde el índice (1) la cantidad que indiques luego de elementos(3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]
console.log(myArray)
myArray.splice(1, 3, "Nuevo Elemento")// quita desde el 1, a 3 elementos y mete "nuevo elemento"
console.log(myArray)