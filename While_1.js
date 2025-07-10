// ! Andrés Alfonso

const prompt = require ("prompt-sync")();

let numero;
numero = prompt("Ingrese un número: ");
numero = Number(numero);

contador = 1;
while (contador<=numero){
    console.log(contador);
    contador ++;
}