
function calcularDescuento(monto) {
    let totalPagar;

    if (monto >= 500) {
        totalPagar = monto - (monto * 0.10);
    } else if (monto >= 200) {
        totalPagar = monto - (monto * 0.05);
    } else {
        totalPagar = monto;
    }

    return totalPagar;
}


console.log("==== EJERCICIO 3 ====");
console.log("Monto 100 → Total a pagar: Bs " + calcularDescuento(100));
console.log("Monto 250 → Total a pagar: Bs " + calcularDescuento(250));
console.log("Monto 700 → Total a pagar: Bs " + calcularDescuento(700));