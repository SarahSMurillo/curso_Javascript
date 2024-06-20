//THIS
//Es el valor sobre el objeto que estamos usando en el momento

const persona={
    nombre:"Sarah",
    apellido:"Murillo",
    mostrarInfo:function(){
        return `El nombre ${this.nombre} y su apellido ${this.apellido}`

    }
}

console.log(persona.mostrarInfo());

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));