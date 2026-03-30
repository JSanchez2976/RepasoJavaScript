// Crea un bucle que imprima los números del 1 al 20.
console.log("EJERCICIO 1:")
for (let i = 1; i < 21; i++) {
    console.log(i)
}
// Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.
console.log("\nEJERCICIO 2:")
let sumaTotal = 0
for (let i = 1; i <= 100; i++) {
    sumaTotal += i
}
console.log(sumaTotal)
// Crea un bucle que imprima todos los números pares entre 1 y 50.
console.log("\nEJERCICIO 3:")
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
console.log("\nEJERCICIO 4:")
let names = ["pepe", "carlos", "marcos", "lucia"]
for (name of names) {
    console.log(name);
}

// Escribe un bucle que cuente el número de vocales en una cadena de texto.
console.log("\nEJERCICIO 5:")
let string = "murcielagos"
let vowelCount = 0
for (char of string) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        vowelCount++
    }
}
console.log(vowelCount);

// Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.
console.log("\nEJERCICIO 6:")
let numArray = [23, 34, 32, 22, 2, 3, 4, 5]
let result = 1
for (num of numArray) {
    result *= num
}
console.log(result);

// Escribe un bucle que imprima la tabla de multiplicar del 5.
console.log("\nEJERCICIO 7:")
for (let i = 0; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`)
}

// Usa un bucle para invertir una cadena de texto.
console.log("\nEJERCICIO 8:")
string = "cadena ejemplo"
for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i])
}

// Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.
console.log("\nEJERCICIO 9:")
let firstNumber = 0
let secondNumber = 1
for (let i = 0; i < 10; i++) {
    let result = firstNumber +secondNumber  
    console.log(result)
    firstNumber = secondNumber
    secondNumber = result
}

// Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.
console.log("\nEJERCICIO 10:")
let numArray2 = [3, 17, 0, 12, 8, 20, 5, 14, 1, 9];
let numArraySorted = []
let i = 0
while(i < numArray2.length){
    let num = numArray2[i]
    if(num>10){
        numArraySorted.push(num)
    }
    i++
}
console.log("Primer array: "+numArray2)
console.log("Segundo array: "+numArraySorted)