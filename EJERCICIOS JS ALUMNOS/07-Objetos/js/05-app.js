//Para que el valor del objeto ya no se cambie se hace lo siguiente
const persona={nombre:"Sarah",
    apellido:"Murillo"
}

console.log(persona);
//Usando esto ya no se cambia el valor, agregar o eliminar valores
Object.freeze(persona);

persona.nombre="Sofia";
console.log(persona);
delete persona.edad;

//Valor bool para saber si esta congelado  el objeto o nadota
console.log(Object.isFrozen(persona));
if(Object.isFrozen(persona))
    alert("Está como la Elsa, bien congelada, no se modifica");

