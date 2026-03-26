// 1. Concatena dos cadenas de texto
let cadena1 = "Hola"
let cadena2 = " a todos"
console.log(cadena1+ cadena2)

// 2. Muestra la longitud de una cadena de texto
console.log("\nCadena: " + cadena1)
console.log("Longitud: "+cadena1.length)

// 3. Muestra el primer y último carácter de un string
console.log(`Primer caracter: ${cadena1[0]}, Ultimo: ${cadena1[cadena1.length-1]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log("Mayusculas: "+cadena1.toUpperCase())
console.log("Minusculas: "+cadena1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadenaVariasLineas = `Esto es
una cadena
a varias lineas`

// 6. Interpola el valor de una variable en un string
console.log("Cadena cambiada: "+cadena1.replace("Hola","Texto cambiado"))
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("Texto reemplazado: "+cadenaVariasLineas.replaceAll(" ","_"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("Include 'cadena': "+cadenaVariasLineas.includes("cadena"))
// 9. Comprueba si dos strings son iguales
console.log("Mismo string: "+cadena1 == cadena2)
// 10. Comprueba si dos strings tienen la misma longitud
console.log("Misma longitud: "+cadena1.length == cadena2.length)