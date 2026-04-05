// Objects

let persona = {
    name: "Pepe",
    age: 22,
    alias: "MoureDev"
}

// Acceso a propiedades

// Notación punto
console.log(persona.name);  // recomienda esta

// Notacion de corchetes
console.log(persona["name"]);

// Modificacion

persona.name = "Pepe"
console.log(persona.name);

// Eliminar propiedades

delete persona.age
console.log(persona)

// Añadir propiedades
persona.email = "mouredev@gmail.com"
persona["age"] = 34
console.log(persona)

// Metodos (funciones)
let persona2 = {
    name: "Pepe",
    age: 22,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina")
    }
}

persona2.walk()

// Anidacion de objetos
let persona3 = {
    name: "Pepe",
    age: 22,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina")
    },
    job: {
        name: "programador",
        exp: 12,
        work: function () {
        console.log(`La persona de ${this.exp} años de experiencia trabaja`)
    },
    }
} 
console.log(persona3)
console.log("trabajo: "+persona3.job.name)
persona3.job.work()

// Igualdad de objects

console.log(persona)
let persona4 = {
    name: "Pepe",
    alias: "MoureDev",
    email: "mouredev@gmail.com",
    age: 34
}
console.log(persona4)

console.log(persona == persona4)
console.log(persona === persona4)
console.log(persona.name === persona.name)

// Iteracion
console.log("\nIteracion:")
for(let value in persona){
    console.log(`${value}: ${persona[value]}`)
}

// Funciones como objects

// deberia ser una clase
function Persona(name, age){
    this.name = name
    this.age = age
}

let persona5 = new Persona("Brais",37)
console.log(persona5)
console.log(persona5.name)

console.log(typeof persona5)