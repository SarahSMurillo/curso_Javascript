const persona={nombre:"Sarah",
    apellido:"Murillo",
    edad:"22",
    carrera:"inge"
}

//Destructuring, saca una estructura y la asigna a una var
const{nombre}=persona;
console.log(nombre);

const{apellido}=persona;
console.log(apellido);

//Destructuring de más de una var
const{edad, carrera}=persona;
console.log(edad,carrera)
