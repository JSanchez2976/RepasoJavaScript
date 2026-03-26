// variable edad
let edad = 20
if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

// else if
let temperatura = 22
if (temperatura >= 30) {
    console.log("Hace calor")
} else if (temperatura >= 20) {
    console.log("El clima es agradable")
} else if (temperatura >= 10) {
    console.log("Hace un poco de fresco")
} else {
    console.log("Hace frío")
}

// ternario
let numero = 7
let parImpar = numero % 2 === 0 ? "Par" : "Impar"
console.log(`El número ${numero} es ${parImpar}`)

// switch
let day = 0
let dayName
switch (day) {
    case 0:
        dayName = "Domingo"
        break
    case 1:
        dayName = "Lunes"
        break
    case 2:
        dayName = "Martes"
        break
    case 3:
        dayName = "Miércoles"
        break
    case 4:
        dayName = "Jueves"
        break
    case 5:
        dayName = "Viernes"
        break
    case 6:
        dayName = "Sábado"
        break
    default:
        dayName = "Día inválido"
}
console.log(`Day ${day}: ${dayName}`)

