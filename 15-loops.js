// loops o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento:  ${numbers[i]}`)
}

// while
let i = 0
while (i < 5) {
    console.log(`Iteración: ${i}`)
    i++
}

// do while
console.log("\nDO WHILE:")
i = 0
do{
    console.log(`Iteración: ${i}`)
    i++
} while(i >5)

// for of
let myMap = new Map([
    ["name","lucas"],
    ["email","braismoure@gmail.com"],
    ["age",37]
])
let mySet = new Set(["Brais", "MOURE", "mouredev", 37, true,"braismoure@mouredev.com"])
let myArray = ["Brais", "Moure", "mouredev", 37, true]
let myString = "Hola"

console.log("\nFOR OF:")
console.log("Array:")
for (let valor of myArray){
    console.log(valor)
}
console.log("\nSet:")
for(let valor of mySet){
    console.log(valor);
}
console.log("\nMap:")
for(let valor of myMap){
    console.log(valor);
}
console.log("\nMap key:")
for(let [clave, _] of myMap){
    console.log(clave);
}
console.log("\nMap value:")
for(let [_, valor] of myMap){
    console.log(valor);
}
// for(let valor of myMap.values()){
//     console.log(valor);
    
// }
// for(let clave of myMap.keys()){
//     console.log(clave);
    
// }
console.log("\nString:")
for(valor of myString){
    console.log(valor);
}

// buenas practicas
console.log("\nBuenas Prácticas:")
for (let i = 0; i < 10; i++) {
    if(i == 5){
        continue    // pasa al siguiente
    } else if(i == 6){
        break
    }
    console.log(`Hola ${i}`)
}