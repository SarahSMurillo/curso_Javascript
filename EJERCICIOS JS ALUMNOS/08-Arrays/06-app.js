const carrito=[];

const producto1={
    nombre:"Monitor",
    precio:500
}

const producto2={
    nombre:"Celu",
    precio:1000
}

const producto3={
    nombre:"Teclado",
    precio:200
}

let resultado=[...carrito, producto1];
console.log(resultado);
resultado=[...resultado ,producto2];
console.log(resultado);