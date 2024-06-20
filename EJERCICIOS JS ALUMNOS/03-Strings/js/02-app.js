/*Propiedades de los string*/
const producto="Monito";
const precio="30 usd";

/*total de tamaño del string*/
console.log(producto.length);

/*Usando IndexOf*/
/*Me manda el ínidice de pulgadas*/
console.log(producto.indexOf("pulgadas"));
/*me regresa -1 porque no existe*/
console.log(producto.indexOf("holi"));

/*Includes*/
/*Es sensible a las mayús y minús*/
console.log(producto.includes("Monitor"));
console.log(producto.includes("monitor"));