// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b)    // Módulo
console.log(a ** b) // Exponente

a++ // incremeto
console.log(a)

a-- // decremento
console.log(a)

// Operadores de asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

// myVariable -= 2
// myVariable *= 2
// myVariable /= 2
// myVariable **= 2++-------
// myVariable %= 2
console.log(a)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == a)
console.log(a != 5) 
console.log(a == 5) // Igualdad por valor
console.log(a == "5") // Igualdad por valor


console.log("\nComparadores por identidad:")
console.log(a === 5) // Igualdad por identidad (tipo y valor)
console.log(a === "5")
console.log(a === "6") 
console.log(a !== "6") 

// 0 es falso, y los demas son true
console.log("\nOtros:")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)

// Operadores lógicos
console.log("\nOperadores lógicos:")

// and (&&)
console.log(5 < 10 && 5 > 2)
console.log(5 < 10 && 5 < 2)

// or (||)
console.log(5 > 10 || 5==5)

// not(!)
console.log(!(5 == 5))

// ternarios
const isRaining = false
let message 

isRaining ? message = "Esta lloviendo" : message = "No Está lloviendo"
console.log(message)