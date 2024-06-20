import saludar from "./02-app";
//Comunicación entre funciones
iniciarApp();
function iniciarApp() {
    console.log("Iniciando nuestra app")   
}

function segundaFun(){
    console.log("Desde la segunda app");
}

function usuarioAutenticado(){
    console.log("Autenticación correcta");
    console.log(`Usuario: ${nombre}`)
}

export default saludar;