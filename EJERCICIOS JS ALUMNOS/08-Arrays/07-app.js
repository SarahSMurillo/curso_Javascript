const carrito=[];


const producto1={
    nombre:"Monitor",
    precio:500
}

const producto2={
    nombre:"Celu",
    precio:1000
}

//Agregar objetos el carrito
carrito.push(producto1);
carrito.push(producto2);
console.log(carrito);


const producto3={
    nombre:"Teclado",
    precio:200
}

//Poner un producto al principio
carrito.unshift(producto3);
console.log(carrito);

//Eliminar objetos del carrito
    //Eliminar primer elemento
//carrito.shift();
    //Eliminar el último elemento
carrito.pop();
    //Eliminar elemento medio
carrito.splice(0,1);
console.log(carrito);
