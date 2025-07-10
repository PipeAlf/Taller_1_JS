// ! Andrés Alfonso

const prompt = require ("prompt-sync")();

let edad;
edad = prompt("Ingrese su edad: ");

if (edad >= "18" ){
    console.log("Puedes entrar");
}else{
    console.log("No puedes entrar");
}