// Strings

let myName = "Brais"
let greeting = "Hola, "+ myName
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Brais"))
console.log(greeting.indexOf("Pepico")) // pa q tire false(-1)
console.log(greeting.includes("Hola"))
console.log(greeting.slice(0,10)) // excluye al indice final (no llega al 10)
console.log(greeting.replace("Brais","Jorge"))

// Template literals (plantillas literales)

let message = `Hola, estoy
haciendo un curso de JavaScript`

console.log(message)

console.log(`Hola, ${myName}`)  // usando el símbolo `