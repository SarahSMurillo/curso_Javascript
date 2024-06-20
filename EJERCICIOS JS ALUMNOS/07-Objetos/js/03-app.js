//Objetos Anidados
const producto={
    nombre:"Ternurin",
    tamano:"Kínder",
    precio:350,
    horchata:{
        procesador:"core i3",
        capacidad:"1 tb"
    }, 
    tienda:"Steren",
}

//Usando Destructuring
const{nombre,tamano}=producto;
console.log(nombre,tamano);

//Sin Destructuring
console.log(producto["nombre"]);
console.log(producto["tamano"]);
console.log(producto["horchata"]);

//Objetos anidados sin Destructuring
console.log(producto.horchata.procesador,producto.horchata.capacidad);
console.log(producto.horchata.capacidad);

let{precio, horchata:{procesador,capacidad}}=producto;
console.log(procesador)
