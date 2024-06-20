//Metodos de Propiedad
const reproductor={
    reproducir:funcion(id){
        console.log(`reproduciendo cancion con id ${nombre}...`);
    },
    pausar: funcion(id){
        console.log(`pausando canción con id ${id}`);
    },
    borrar:function (id){
        console.log(`borrando cancion con id ${id}`);
    },
    crearPlay:function(id){

    }

}

reproductor.reproducir("Himno");
reproductor.pausar(1);