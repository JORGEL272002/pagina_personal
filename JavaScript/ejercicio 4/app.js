
function promedio(numeros) {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
    }
    let resultado = suma / numeros.length;
    return resultado;
}


let precios = [25, 40, 15, 60];
console.log("==== EJERCICIO 4 ====");
console.log("Arreglo precios: " + precios);
console.log("El promedio es: " + promedio(precios));