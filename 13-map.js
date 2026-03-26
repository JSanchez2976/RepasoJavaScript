// Map

// Declaración
let myMap = new Map()
console.log(myMap)

let nombre = "pepe"

// Inicializacion
myMap = new Map([
    ["name",nombre],
    ["email","braismoure@gmail.com"],
    ["age",37]
])
console.log(myMap)

// Metodos y peculiaridades

// set
// si no existia la clave, se añade. Si ya existía se reemplaza el valor
myMap.set("alias","Mouredev")
myMap.set("name","Brais Moure")
console.log(myMap)

// get
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
console.log(myMap.has("name"))
console.log(myMap.has("surname"))

// delete
myMap.delete("email")
console.log(myMap)

// keys (claves) , values (valores) y entries (clave, valor)
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size
console.log("Tamaño: "+myMap.size)

// clear
myMap.clear()
console.log(myMap)