// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("EJERCICIO 1:")
const sum = (val1, val2) => {
    return val1 + val2
}
console.log(sum(3, 4))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("\nEJERCICIO 2:")
let numArray = [3, 4, 5, 2, 28]
console.log(maxNum(numArray))
function maxNum(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        if (num > max) {
            max = num
        }
    }
    return max
}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("\nEJERCICIO 3:")
let testStr = "hello world"
function countVowels(string) {
    let count = 0
    for (char of string) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++
        }
    }
    return count
}
console.log(countVowels(testStr))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("\nEJERCICIO 4:")
let strArray = ["hello", "world"]
function toUpperCaseArray(array) {
    let upperArray = []
    for (word of array) {
        upperArray.push(word.toUpperCase())
    }
    return upperArray
}
console.log(toUpperCaseArray(strArray))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("\nEJERCICIO 5:")
const isPrime = (num) => num % 2 == 1 ? true : false
console.log(isPrime(7))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("\nEJERCICIO 6:")
let arr1 = [3, 2, 3, 4]
let arr2 = [3, 4, 5, 6]
function commonElements(arr1, arr2) {
    let commonArray = []

    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i]
        if (commonArray.includes(value)) continue
        if (arr2.includes(value)) {
            commonArray.push(value)
        }
    }
    return commonArray
}
console.log(commonElements(arr1, arr2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("\nEJERCICIO 7:")
let nums = [1, 2, 3, 4, 5, 6]
const sumEvens = function (numArray) {
    let evenArray = []
    for (num of numArray) {
        if (num % 2 == 0) evenArray.push(num)
    }
    return evenArray
}
console.log(sumEvens(nums))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("\nEJERCICIO 8:")
function squareArray(array){
    let squareArray = []
    for(num of array){
        squareArray.push(Math.pow(num,2))
    }
    return squareArray
}
console.log(squareArray(nums))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("\nEJERCICIO 9:")
let sentence = "hello world from js"
function reverseWords(sentence){
    let revSentence = ""
    for (let i = sentence.length-1; i >= 0 ; i--) {
        const word = sentence[i];
        revSentence += (word+" ")     
    }
    return revSentence
}
console.log(reverseWords(sentence))

// 10. Crea una función que calcule el factorial de un número dado
console.log("\nEJERCICIO 10:")
const factorial = (num) => {
    let result = 1
    let i = 1
    while(i<=num){
        result *= i
        i++
    }
    return result
}
console.log(factorial(5))