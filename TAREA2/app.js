
const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#nuevaTarea");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

function actualizarContador() {
  const pendientes = lista.querySelectorAll("li:not(.hecha)").length;
  contador.textContent = "Tareas pendientes: " + pendientes;
}

function crearTarea(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const boton = document.createElement("button");
  boton.textContent = "X";
  boton.className = "borrar";
  boton.setAttribute("aria-label", "Eliminar tarea");

  li.append(span, boton);
  return li;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita recargar la página
  const texto = entrada.value.trim();

  if (texto === "") {
    entrada.style.borderColor = "red";
    entrada.placeholder = "¡Escribe algo primero!";
    return;
  }

  entrada.style.borderColor = "";
  entrada.placeholder = "Escribe una tarea...";
  lista.appendChild(crearTarea(texto));
  entrada.value = "";
  entrada.focus();
  actualizarContador();
});

lista.addEventListener("click", function (evento) {
  const boton = evento.target.closest(".borrar");
  if (boton) {
    boton.closest("li").remove(); // eliminar la tarea
  } else {
    const item = evento.target.closest("li");
    if (item) item.classList.toggle("hecha"); // marcar / desmarcar
  }
  actualizarContador();
});
