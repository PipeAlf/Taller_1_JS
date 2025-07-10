// ! Andrés Alfonso

const prompt = require ("prompt-sync")();

let numero;
numero = prompt("Ingrese un número :");
let mult=0;

for(let i=1;i<=10;i++){
    mult=numero*i;
    console.log(numero, " * ",i, " = ",mult);
}