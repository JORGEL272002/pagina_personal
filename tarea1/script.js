
const estudiante = {
    nombre: "Jorge Luis",
    carrera: "Ingeniería de Sistemas",
    semestre: 4,
    calificaciones: [85, 90, 78, 92], 

   
    resumen() {
        return `Estudiante: ${this.nombre}\nCarrera: ${this.carrera}\nSemestre: ${this.semestre}°\nCalificaciones: [${this.calificaciones.join(', ')}]`;
    },

  
    agregarCalificacion(nota) {
        if (isNaN(nota) || nota < 0 || nota > 100) {
            throw new Error(`Calificación inválida (${nota}). Debe ser un número entre 0 y 100.`);
        }
        this.calificaciones.push(nota);
        return `Éxito: Calificación ${nota} agregada correctamente.`;
    },


    calcularPromedio() {
        if (this.calificaciones.length === 0) return 0;
        const suma = this.calificaciones.reduce((acum, actual) => acum + actual, 0);
        return (suma / this.calificaciones.length).toFixed(2);
    },

  
    obtenerNotasAprobadas() {
        return this.calificaciones.filter(nota => nota >= 60);
    },

   
    consultarExpedienteEnServidor() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true;
                if (exito) {
                    resolve(`Datos del Servidor -> Estado: Regular | Promedio general: ${this.calcularPromedio()}`);
                } else {
                    reject(new Error("Error de conexión con el servidor académico."));
                }
            }, 1000);
        });
    }
};


const divEstado = document.getElementById("estado-objeto");
const divConsola = document.getElementById("consola");
const inputNota = document.getElementById("input-nota");


function actualizarVista() {
    divEstado.textContent = estudiante.resumen();
}


actualizarVista();


document.getElementById("btn-resumen").addEventListener("click", () => {
    divConsola.textContent = "--> Llamada a resumen():\n" + estudiante.resumen();
});

document.getElementById("btn-aprobadas").addEventListener("click", () => {
    const aprobadas = estudiante.obtenerNotasAprobadas();
    divConsola.textContent = `--> Notas aprobadas (usando .filter con función flecha):\n[${aprobadas.join(', ')}]`;
});

document.getElementById("btn-agregar").addEventListener("click", () => {
    const valor = Number(inputNota.value);
    try {
     
        const mensaje = estudiante.agregarCalificacion(valor);
        divConsola.textContent = `--> Éxito:\n${mensaje}`;
        actualizarVista();
    } catch (error) {
        divConsola.textContent = `} Error capturado (try/catch):\n${error.message}`;
    }
    inputNota.value = "";
});

document.getElementById("btn-promedio").addEventListener("click", () => {
    const promedio = estudiante.calcularPromedio();
    divConsola.textContent = `--> Promedio calculado:\n${promedio}`;
});

document.getElementById("btn-servidor").addEventListener("click", async () => {
    divConsola.textContent = "Consultando servidor en línea (Promesa con setTimeout)...";
    try {
        const resultado = await estudiante.consultarExpedienteEnServidor();
        divConsola.textContent = `--> Respuesta de la Promesa:\n${resultado}`;
    } catch (error) {
        divConsola.textContent = ` Promesa rechazada:\n${error.message}`;
    }
});