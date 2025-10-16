
function calcularOhm() {
    let R = parseFloat(document.getElementById("resistencia").value);
    let I = parseFloat(document.getElementById("corrente").value);
    let V = parseFloat(document.getElementById("tensao").value);
    let resultado = "";

    if (!isNaN(R) && !isNaN(I) && isNaN(V)) {
        V = R * I;
        resultado = `Tensão = ${V.toFixed(2)} V`;
    } else if (!isNaN(V) && !isNaN(I) && isNaN(R)) {
        R = V / I;
        resultado = `Resistência = ${R.toFixed(2)} Ω`;
    } else if (!isNaN(V) && !isNaN(R) && isNaN(I)) {
        I = V / R;
        resultado = `Corrente = ${I.toFixed(2)} A`;
    } else {
        resultado = "Preencha apenas dois campos!";
    }

    document.getElementById("resultadoOhm").innerText = resultado;
}

function calcularPotencia() {
    let V = parseFloat(document.getElementById("potV").value);
    let I = parseFloat(document.getElementById("potI").value);
    let R = parseFloat(document.getElementById("potR").value);
    let resultado = "";

    if (!isNaN(V) && !isNaN(I)) {
        resultado = `Potência = ${(V * I).toFixed(2)} W (P = V x I)`;
    } else if (!isNaN(V) && !isNaN(R)) {
        resultado = `Potência = ${((V*V)/R).toFixed(2)} W (P = V² / R)`;
    } else if (!isNaN(I) && !isNaN(R)) {
        resultado = `Potência = ${(I*I*R).toFixed(2)} W (P = I² x R)`;
    } else {
        resultado = "Preencha pelo menos dois campos!";
    }

    document.getElementById("resultadoPot").innerText = resultado;
}

function lerSensor() {
    let valor = parseInt(document.getElementById("sensorValor").value);
    let resultado = "";

    if (isNaN(valor) || valor < 0 || valor > 1023) {
        resultado = "Digite um valor válido (0 a 1023).";
    } else {
        if(valor < 400) {
            resultado = `Valor: ${valor} → Ambiente escuro (LED aceso).`;
        } else {
            resultado = `Valor: ${valor} → Ambiente claro (LED apagado).`;
        }
    }

    document.getElementById("resultadoSensor").innerText = resultado;
}
