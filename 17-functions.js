// Funciones

function greet(name) {
    console.log(`Hola, ${name}`)
}

greet("Jorge")

// Funciones anonimas

const myFunc2 = function (name) {
    console.log(`Hola, ${name}`)
}

myFunc2("Jorge")

// Arrow functions
const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}
myFunc3("Jorge")

const myFunc4 = (name) => console.log(`Hola, ${name}`)
myFunc4("Jorge")

// Parámetros
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}
defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 10)

// Retorno de valores
function mult(a, b) {
    return a * b
}

console.log(mult(3,2))

// Funciones anidadas
function extern() {
    console.log("Funcion externa")
    intern()
    function intern() {
        console.log("Funcion interna")
    }
}

extern()
// intern() error

// Funciones de orden superior

function applyFunc(func, param){
    func(param)
}
applyFunc(myFunc4,"Funcion de orden superior")

// forEach
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((value) => console.log(value))