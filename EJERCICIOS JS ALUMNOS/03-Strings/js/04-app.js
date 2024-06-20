/*Reemplazo de una parte de la cadena por otro*/
const nombre="Holi Gatoli";
console.log(nombre);

/*replace*/
console.log(nombre.replace("Gatoli", "Pick"));
console.log(nombre.replace("Holi  ", " "));

/*para cortar cadenas*/
/*slice*/
console.log(nombre.length);
console.log(nombre.slice(0,3));
console.log(nombre.slice(8));

/*subString*/
/*corta hacia atrás*/
console.log(nombre.substring(6,10));
console.log(nombre.substring(2,1));

/*Me regresa el caracter que está en esa posición*/
/*charAt*/
console.log(nombre.charAt(4));

/*Para repetir cadenas de texto*/
/*repeat*/
const producto="Monitor de 24 pul";
const holi="en promocion".repeat(3);

console.log(holi);
console.log(producto.repeat(2.2));

console.log(`El producto ${producto} ${holi}`);

/*Convertir cadena de caracteres en un arreglo*/
/*Split*/
const actividad="Estoy aprendiendo";
console.log(actividad.split(""));



