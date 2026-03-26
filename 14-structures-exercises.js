// 1. Crea un array que almacene cinco animales
let myArray = ["perro","gato","elefante","tiburon","jirafa"]
// 2. Añade dos más. Uno al principio y otro al final
myArray.push("cebra")
myArray.unshift("koala")
console.log(myArray)
// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)
console.log("\nTras quitar el tercer elemento:")
console.log(myArray)
// 4. Crea un set que almacene cinco libros
let mySet = new Set(["libro1","libro2","libro3","libro4","libro5"])
console.log("\nSet recien creado: ")
console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido
mySet.add("libro6")
mySet.add("libro5") // repetido
console.log("\nSet con añadidos: ")
console.log(mySet);


// 6. Elimina uno concreto a tu elección
mySet.delete("libro3")
console.log("\nSet con 'libro3' borrado: ")
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map