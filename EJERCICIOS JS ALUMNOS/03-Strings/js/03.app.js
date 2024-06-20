/*ctrl ku*/
/*ctrl kc*/

const producto=("Monitor");
constpulgadas="24 pulgadas";

/*concatenar usando métodos*/
console.log(producto.concat("En descuento"));
console.log(producto.concat(pulgadas));

/*concatenar como en c o python*/
console.log(producto+pulgadas);
console.log(producto+" "+ pulgadas);
console.log(producto + "tiene un tamaño de "+pulgadas);

/*otra forma de concatenar*/
console.log("El producto", producto, "es de", pulgadas);

/*TempleteStrings ayuda a recibir variables del usuario o ya las tengo*/
console.log(`El producto ${producto}`);
``  ``

/*Elimina espacios en blanco al inicio de la cadena*/
const producto2="        Holi";
console.log(producto2.trimStart());

/*Elimina espacios al final*/
const producto3="Holi      ";
console.log(producto2.trimEnd());

const nombre="   Holi   ";
console.log(nombre);
console.log(nombre.trim())

