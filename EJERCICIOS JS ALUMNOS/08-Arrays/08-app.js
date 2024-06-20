const numeros=[1,2,3,4,5];
//const [primero, segundo, tercero]=numeros;


const [primero, segundo, ...tercero]=numeros;
console.log(primero);
console.log(segundo);
console.log(tercero);