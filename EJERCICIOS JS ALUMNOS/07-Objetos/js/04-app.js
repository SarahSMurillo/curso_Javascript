const producto={
    nombre:"Ternurin",
    tamano:"Kínder",
    precio:350,
    horchata:{
        procesador:"core i3",
        capacidad:"1 tb"
    }, 
    tienda:"Steren",
    disponible:"true",
}

//No permite alterar el valor de las variables a menos que sea de un objeto
const num1=20;
num1=38;

console.log(num1);
producto.disponible=false;
console.log(producto.disponible);

//Para que el valor del objeto ya no se cambie