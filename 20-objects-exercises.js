// 1. Crea un objeto con 3 propiedades
let animal = {
    name: "perro",
    weight: 12.3,
    height: 53.2
}
// 2. Accede y muestra su valor
console.log(animal.name)
// 3. Agrega una nueva propiedad
animal.diet = "omnivoro"
console.log(animal)
// 4. Elimina una de las 3 primeras propiedades
delete animal.height
console.log(animal)
// 5. Agrega una función e invócala
animal.sound = function () {
    console.log("guau guau")
}
console.log(animal.sound())
// 6. Itera las propiedades del objeto
console.log("\nIterado: ")
for (value in animal) {
    console.log(`${value}: ${animal[value]}`)
}
// 7. Crea un objeto anidado 
console.log("\nObjeto anidado: ")
animal.father = {
    name: "perro padre",
    weight: 22.3,
    height: 80.2
}
console.log(animal)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("\nPropiedades anidadas: ")
for (value in animal.father) {
    console.log(`${value}: ${animal.father[value]}`)
}
// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("Propiedades iguales?(altura y nombre): " + (animal.height === animal.name))