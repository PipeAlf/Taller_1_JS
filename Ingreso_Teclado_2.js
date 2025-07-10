// ! Andrés Alfonso

const prompt = require ("prompt-sync")();

let number1;
let number2;
let suma;

number1 = prompt("Ingrese el primer número: ");
number2 = prompt("Ingrese el segundo número:");

number1 = Number(number1);
number2 = Number(number2);

suma = number1 + number2;

console.log("La suma es: ", suma)
