// 1. Crear el objeto TUTOR

// const tutor = {
//     nombre: "Juan Pérez",
//     edad: 40,
//     DNI: "12345678A",
//     tituloUniversitario: "Ingeniería Informática"
// };







// 2. Crear el objeto ASIGNATURA y una lista de asignaturas

const asignaturas = [
    { nombre: "Programación", curso: 1, horasTotales: 120 },
    { nombre: "Bases de Datos", curso: 1, horasTotales: 100 },
    { nombre: "Entornos de Desarrollo", curso: 1, horasTotales: 80 },
    { nombre: "Desarrollo Web", curso: 2, horasTotales: 140 }
];







// 3. Crear el objeto ALUMNO


// const alumno = {
//     nombre: "Carlos López",
//     edad: 19,
//     ciclo: "Desarrollo de Aplicaciones Web",
//     curso: 2,
//     tutor: tutor,
//     asignaturas: asignaturas,
//     notasMedias: [8.5, 7.2, 9.0, 7.8] // Media de cada asignatura
// };






// 4. Mostrar datos del alumno en un DIV con CSS
// Aquí usamos document.createElement para generar un DIV dinámico.


function mostrarAlumno() {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.backgroundColor = "#f4f4f4";

    div.innerHTML = `
        <h2>Datos del Alumno</h2>
        <p><strong>Nombre:</strong> ${alumno.nombre}</p>
        <p><strong>Edad:</strong> ${alumno.edad}</p>
        <p><strong>Ciclo:</strong> ${alumno.ciclo}</p>
        <p><strong>Curso:</strong> ${alumno.curso}</p>
        <h3>Tutor</h3>
        <p><strong>Nombre:</strong> ${alumno.tutor.nombre}</p>
        <p><strong>Título Universitario:</strong> ${alumno.tutor.tituloUniversitario}</p>
        <h3>Asignaturas</h3>
        <ul>
            ${alumno.asignaturas.map((asig, index) => `
                <li>${asig.nombre} (Horas: ${asig.horasTotales}, Nota Media: ${alumno.notasMedias[index]})</li>
            `).join('')}
        </ul>
    `;

    document.body.appendChild(div);
}

mostrarAlumno();






// 5. Métodos para el objeto TUTOR

const tutor = {
    nombre: "Juan Pérez",
    edad: 40,
    DNI: "12345678A",
    tituloUniversitario: "Ingeniería Informática",
    mostrar: function() {
        return `Tutor: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.DNI}, Título: ${this.tituloUniversitario}`;
    },
    cambiarNombre: function(nuevo) {
        this.nombre = nuevo;
    }
};



// 6. Métodos para el objeto ASIGNATURA

const asignatura = {
    nombre: "Programación",
    curso: 1,
    horasTotales: 120,


    mostrar: function() {
        return `Asignatura: ${this.nombre}, Curso: ${this.curso}, Horas Totales: ${this.horasTotales}`;
    },
    cambiarHoras: function(nueva) {
        this.horasTotales = nueva;
    }
};





// 7. Métodos para el objeto ALUMNO

const alumno = {
    nombre: "Carlos López",
    edad: 19,
    ciclo: "Desarrollo de Aplicaciones Web",
    curso: 2,
    tutor: tutor,
    asignaturas: asignaturas,
    notasMedias: [8.5, 7.2, 9.0, 7.8],

    calcularMedia: function() {
        let suma = this.notasMedias.reduce((a, b) => a + b, 0);
        return (suma / this.notasMedias.length).toFixed(2);
    },

    mediaAsignatura: function() {
        return this.asignaturas.map((asig, index) => `${asig.nombre}: ${this.notasMedias[index]}`).join(", ");
    },

    mostrar: function() {
        return `
            Nombre: ${this.nombre}, Edad: ${this.edad}, Ciclo: ${this.ciclo}, Curso: ${this.curso}
            Tutor: ${this.tutor.mostrar()}
            Asignaturas: ${this.mediaAsignatura()}
            Media Total: ${this.calcularMedia()}
        `;
    }
};




// 8. Mostrar los datos en un DIV con CSS

function mostrarAlumnoConFunciones() {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.backgroundColor = "#f4f4f4";

    div.innerHTML = `
        <h2>Datos del Alumno</h2>

        


        <p>${alumno.mostrar().replace(/\n/g, "<br>")}</p>
    `;   // se sustituyen los saltos de linea por br

    document.body.appendChild(div);
}

mostrarAlumnoConFunciones();