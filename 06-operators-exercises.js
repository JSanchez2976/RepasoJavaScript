// 1. Crea una variable para cada operación aritmética
const suma = 10 + 5; // 15
const resta = 10 - 5; // 5
const multiplicación = 10 * 5; // 50
const división = 10 / 5; // 2
const módulo = 10 % 3; // 1
const potencia = 2 ** 3; // 8

console.log("--- Operaciones Aritméticas ---");
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicación);
console.log("División:", división);
console.log("Módulo:", módulo);
console.log("Potencia:", potencia);

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas
let x = 20;
x += 5; // x = x + 5 = 25
let y = 30;
y -= 10; // y = y - 10 = 20
let z = 4;
z *= 3; // z = z * 3 = 12
let w = 100;
w /= 5; // w = w / 5 = 20
let a = 17;
a %= 5; // a = a % 5 = 2

console.log("\n--- Operaciones de Asignación ---");
console.log("x += 5 →", x);
console.log("y -= 10 →", y);
console.log("z *= 3 →", z);
console.log("w /= 5 →", w);
console.log("a %= 5 →", a);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("\n--- Comparaciones Verdaderas ---");
console.log("10 > 5:", 10 > 5); // true
console.log("10 >= 10:", 10 >= 10); // true
console.log("5 < 10:", 5 < 10); // true
console.log("5 <= 5:", 5 <= 5); // true
console.log("10 === 10:", 10 === 10); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("\n--- Comparaciones Falsas ---");
console.log("10 < 5:", 10 < 5); // false
console.log("10 <= 5:", 10 <= 5); // false
console.log("5 > 10:", 5 > 10); // false
console.log("5 !== 5:", 5 !== 5); // false
console.log("'10' === 10:", '10' === 10); // false (diferentes tipos)

// 5. Utiliza el operador lógico and
console.log("\n--- Operador Lógico AND (&&) ---");
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("5 > 3 && 10 > 5:", 5 > 3 && 10 > 5); // true
console.log("5 < 3 && 10 > 5:", 5 < 3 && 10 > 5); // false

// 6. Utiliza el operador lógico or
console.log("\n--- Operador Lógico OR (||) ---");
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false
console.log("5 > 10 || 10 > 5:", 5 > 10 || 10 > 5); // true
console.log("5 < 3 || 10 < 5:", 5 < 3 || 10 < 5); // false

// 7. Combina ambos operadores lógicos
console.log("\n--- Combinación de AND y OR ---");
console.log("(5 > 3 && 10 > 5) || (2 < 1):", (5 > 3 && 10 > 5) || (2 < 1)); // true
console.log("(5 < 3 && 10 > 5) || (3 > 1):", (5 < 3 && 10 > 5) || (3 > 1)); // true
console.log("(5 > 3 && 10 < 5) || (2 < 1):", (5 > 3 && 10 < 5) || (2 < 1)); // false

// 8. Añade alguna negación
console.log("\n--- Operador de Negación (!) ---");
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("!(5 > 3):", !(5 > 3)); // false
console.log("!(5 < 3):", !(5 < 3)); // true
console.log("!(5 > 3 && 10 < 5):", !(5 > 3 && 10 < 5)); // true

// 9. Utiliza el operador ternario
console.log("\n--- Operador Ternario ---");
const edad = 25;
const esAdulto = edad >= 18 ? "Es adulto" : "Es menor de edad";
console.log("¿Es adulto?", esAdulto); // Es adulto

const numero = 15;
const tipo = numero % 2 === 0 ? "Par" : "Impar";
console.log("¿Es par o impar?", tipo); // Impar

const calificación = 85;
const resultado = calificación >= 70 ? "Aprobado" : "Reprobado";
console.log("Resultado:", resultado); // Aprobado

// 10. Combina operadores aritméticos, de comparación y lógicos
console.log("\n--- Combinación de todos los operadores ---");
const num1 = 20;
const num2 = 8;
const num3 = 5;

const combinado1 = (num1 + num2) > 20 && (num1 - num2) < 15 ? "Cumple condición" : "No cumple";
console.log("(20 + 8) > 20 && (20 - 8) < 15 →", combinado1); // Cumple condición

const combinado2 = (num1 * num3) === 100 || (num2 / num3) > 1 ? "Verdadero" : "Falso";
console.log("(20 * 5) === 100 || (8 / 5) > 1 →", combinado2); // Verdadero

const combinado3 = !(num1 < num2) && (num1 % 4 === 0) ? "Sí" : "No";
console.log("!(20 < 8) && (20 % 4 === 0) →", combinado3); // Sí