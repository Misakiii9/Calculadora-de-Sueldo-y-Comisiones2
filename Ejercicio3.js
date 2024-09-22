function calcularTotal() {

    let sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    let venta1 = parseFloat(document.getElementById('venta1').value);
    let venta2 = parseFloat(document.getElementById('venta2').value);
    let venta3 = parseFloat(document.getElementById('venta3').value);
    
    if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa valores válidos para todas las ventas y el sueldo base.";
        return;
    }

    // 10% de cada venta
    let comisionTotal = (venta1 + venta2 + venta3) * 0.10;

    let sueldoTotal = sueldoBase + comisionTotal;

    document.getElementById('resultado').innerHTML = `
        <p>Comisión total por las ventas: $${comisionTotal.toFixed(2)}</p>
        <p>Sueldo total (sueldo base + comisiones): $${sueldoTotal.toFixed(2)}</p>
    `;
}