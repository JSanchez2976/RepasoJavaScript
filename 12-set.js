// set
// LO MÁS IMPORTANTE ES QUE NO ACEPTA VALORES DUPLICADOS

// Declaracion

let mySet = new Set()
console.log(mySet);


mySet = new Set(["Brais", "MOURE", "mouredev", 37, true,"braismoure@mouredev.com"])
console.log(mySet);

// Metodos comunes

// add y delete
mySet.add("https://moure.dev")
console.log(mySet);

mySet.delete("https://moure.dev")
console.log(mySet);
console.log(mySet.delete("Brais")); // retorna true si lo ha eliminado
console.log(mySet.delete(4)); // retorna true si lo ha eliminado
console.log(mySet);

// has
console.log("Está Moure?: "+mySet.has("Moure".toUpperCase()));
console.log("Está Brais?: "+mySet.has("Brais"));

// size
console.log("Tamaño: "+mySet.size);

// convertir set a Array
let myArray = Array.from(mySet)
console.log(myArray);

// convertir un array a Set
mySet = new Set(myArray)
console.log(mySet);


mySet.add("braismoure@mouredev.com")
console.log(mySet)
mySet.add("BraisMoure@mouredev.com") // case sensitive (diferencia min y mayusc)
console.log(mySet)
// clear
mySet.clear()
console.log(mySet)