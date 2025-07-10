// ! Andrés Alfonso

const prompt = require ("prompt-sync")();

let año_nacimiento;
año_nacimiento = prompt("Ingrese su año de nacimiento: ");
año_nacimiento = Number(año_nacimiento);

let año_actual = 2025;
let edad;

edad = año_actual - año_nacimiento;

console.log("Su edad es: ", edad)
