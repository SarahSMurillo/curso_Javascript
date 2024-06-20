const carrito=[
    {nombre:"Monitor", precio:100},
    {nombre:"Ropita", precio:100},
    {nombre:"Ternus", precio:100},
    {nombre:"Estampas", precio:100},
    {nombre:"Monito", precio:100},
    {nombre:"Perfume", precio:100}
]

const nuevoArray=carrito.nap(function(producto){
    return `Articulo: ${producto.nombre} Precio:${producto.precio}`
})

console.log(nuevoArray);
