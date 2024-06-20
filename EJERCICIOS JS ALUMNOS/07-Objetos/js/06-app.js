const persona={nombre:"Sarah",
    apellido:"Murillo",
    edad:20,
    carrera:"inge"
}

//No permite agregar, eliminar las propiedades PERO sí agregar SEAL ESTAS SELLANDO
Object.seal(persona);
persona.apMat="Flores";
delete persona.nombre;
persona.nombre="Sofia";
console.log(persona)

//Comprobando si está Seal o no
console.log(Object.isSealed(persona))
