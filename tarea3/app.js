const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador");


function actualizarContador() {
    const total = lista.children.length;
    const hechas = lista.querySelectorAll("li.completada").length;
    contador.textContent = hechas + " de " + total + " tareas completadas";
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "texto";
    span.textContent = texto;

    
    const btn = document.createElement("button");
    btn.className = "eliminar";
    btn.textContent = "Eliminar";

    li.append(span, btn);
    lista.appendChild(li);

    form.reset();
    input.focus();
    actualizarContador();
});


lista.addEventListener("click", function (e) {
    
    const boton = e.target.closest("button.eliminar");
    if (boton) {
        boton.closest("li").remove();
        actualizarContador();
        return;
    }

    
    const li = e.target.closest("li");
    if (li && lista.contains(li)) {
        li.classList.toggle("completada");
        actualizarContador();
    }
});


actualizarContador();