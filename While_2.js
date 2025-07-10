// ! Andrés Alfonso

const prompt = require ("prompt-sync")();

let contraseña;


while(true){
    contraseña = prompt("Ingrese contraseña: ");
    if (contraseña === "1234"){
        console.log("Contraseña correcta");
        break
    }
    else{
        console.log("Intente nuevamente.");
    }
}
