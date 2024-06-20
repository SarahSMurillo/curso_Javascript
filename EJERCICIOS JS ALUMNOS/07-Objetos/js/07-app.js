//Método para unir dos o más objetos assign
const persona={
    nombre:"Sarah",
    apellido:"Murillo"
}

const alumno={
    numero_cuenta:"2222",
    creditos:"430"
}

const profes={
    num_empleado:"333",
    sueldo:"500"
}

const esAlumno= Object.assign(persona,alumno);
console.log(esAlumno);

const alumn=true;

if (alumno=true){
    const esAlumno= Object.assign(persona,alumno);
    console.log(esAlumno);
} else{
    const esProfesor= Object.assign(persona,profes);
    console.log(esProfesor);
} 

